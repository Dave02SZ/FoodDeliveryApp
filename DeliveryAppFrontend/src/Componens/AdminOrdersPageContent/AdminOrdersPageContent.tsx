import { useState, useEffect } from "react";
import "./AdminOrdersPageContent.css"

interface OrderItem {
    foodId: number | null;
    drinkId: number | null;
}

interface Order {
    id: number;
    status: "ORDER_CREATED" | "WORK_IN_PROGRESS" | "DELIVERED";
    orderItems: OrderItem[];
}

interface FoodItem {
    id: number;
    name: string;
}

interface DrinkItem {
    id: number;
    name: string;
}

const AdminOrdersPageContent = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [foodItems, setFoodItems] = useState<FoodItem[]>([]); // Az étel adatok tárolása
    const [drinkItems, setDrinkItems] = useState<DrinkItem[]>([]); // Az ital adatok tárolása

    // Betöltjük az összes rendelést
    useEffect(() => {
        fetch('http://localhost:8080/api/order')
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Hiba történt a rendelési lista betöltésekor:', error);
                setLoading(false);
            });
    }, []);

    // Betöltjük az ételek és italok adatokat
    useEffect(() => {
        fetch('http://localhost:8080/api/food')  // Ezt cseréld le a megfelelő endpoint-ra
            .then((response) => response.json())
            .then((data) => setFoodItems(data));

        fetch('http://localhost:8080/api/drink') // Ezt cseréld le a megfelelő endpoint-ra
            .then((response) => response.json())
            .then((data) => setDrinkItems(data));
    }, []);

    const handleDeleteOrder = (orderId: number) => {
        fetch(`http://localhost:8080/api/order/${orderId}/delete`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    setOrders(orders.filter((order) => order.id !== orderId)); // Töröljük a törölt rendelést a listából
                    alert('Rendelés sikeresen törölve!');
                } else {
                    alert('Hiba történt a rendelés törlése során.');
                }
            })
            .catch((error) => {
                console.error('Hálózati hiba:', error);
                alert('Nem sikerült törölni a rendelést.');
            });
    };

    const handleUpdateStatus = (orderId: number, currentStatus: "ORDER_CREATED" | "WORK_IN_PROGRESS" | "DELIVERED") => {
        let nextStatus: "ORDER_CREATED" | "WORK_IN_PROGRESS" | "DELIVERED";

        switch (currentStatus) {
            case "ORDER_CREATED":
                nextStatus = "WORK_IN_PROGRESS";
                break;
            case "WORK_IN_PROGRESS":
                nextStatus = "DELIVERED";
                break;
            default:
                alert("A rendelés már teljesítve van.");
                return; // Ha a státusz már DELIVERED, ne lehessen tovább módosítani.
        }

        fetch(`http://localhost:8080/api/order/${orderId}/update/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: nextStatus }),
        })
            .then((response) => {
                if (response.ok) {
                    setOrders(orders.map((order) =>
                        order.id === orderId ? { ...order, status: nextStatus } : order
                    ));
                    alert('Státusz sikeresen frissítve!');
                } else {
                    alert('Hiba történt a státusz frissítésekor.');
                }
            })
            .catch((error) => {
                console.error('Hálózati hiba:', error);
                alert('Nem sikerült frissíteni a státuszt.');
            });
    };

    // Keresés az ételek és italok között az ID alapján
    const getFoodName = (foodId: number) => {
        const food = foodItems.find((item) => item.id === foodId);
        return food ? food.name : "N/A"; // Ha nincs étel a listában, "N/A"-t írunk
    };

    const getDrinkName = (drinkId: number) => {
        const drink = drinkItems.find((item) => item.id === drinkId);
        return drink ? drink.name : "N/A"; // Ha nincs ital a listában, "N/A"-t írunk
    };

    if (loading) {
        return <p>Rendelések betöltése...</p>;
    }

    return (
        <div className="admin-orders-page-content">
            <h2>Rendelések kezelése</h2>
            {orders.length > 0 ? (
                <div>
                    <table className="admin-orders-table">
                        <thead>
                        <tr>
                            <th>Rendelés ID</th>
                            <th>Rendelési tételek</th>
                            <th>Státusz</th>
                            <th>Státusz frissítés</th>
                            <th>Törlés</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>
                                    {order.orderItems.map((item, index) => (
                                        <div key={index}>
                                            {item.foodId && <span>{getFoodName(item.foodId)} </span>}
                                            {item.drinkId && <span>{getDrinkName(item.drinkId)} </span>}
                                        </div>
                                    ))}
                                </td>
                                <td>{order.status}</td>
                                <td>
                                    {order.status === "ORDER_CREATED" && (
                                        <button
                                            className="admin-status-button"
                                            onClick={() => handleUpdateStatus(order.id, order.status)}
                                        >
                                            Munkálatok alatt
                                        </button>
                                    )}
                                    {order.status === "WORK_IN_PROGRESS" && (
                                        <button
                                            className="admin-status-button"
                                            onClick={() => handleUpdateStatus(order.id, order.status)}
                                        >
                                            Kész
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button
                                        className="admin-delete-button"
                                        onClick={() => handleDeleteOrder(order.id)}
                                    >
                                        Törlés
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Nincs rendelés.</p>
            )}
        </div>

    );
};

export default AdminOrdersPageContent;
