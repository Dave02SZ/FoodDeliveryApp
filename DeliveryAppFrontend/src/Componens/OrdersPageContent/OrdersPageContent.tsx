import { useOrder } from "./OrderContext.tsx";

const OrdersPageContent = () => {
    const { orderItems, removeFromOrder, clearOrder } = useOrder();

    const handleSubmitOrder = () => {
        // Átalakítjuk az orderItems listát, hogy a kívánt formátumban küldjük el az API-nak
        const orderToSend = orderItems.map(item => ({
            foodId: item.type === "FOOD" ? item.id : null,
            drinkId: item.type === "DRINK" ? item.id : null
        }));

        fetch('http://localhost:8080/api/order/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ orderItems: orderToSend }), // Az átalakított rendelési lista küldése
        })
            .then((response) => {
                if (response.ok) {
                    alert('Rendelés sikeresen leadva!');
                    clearOrder();
                } else {
                    response.json().then((data) => {
                        console.error('Hiba az API-tól:', data);
                        alert('Hiba történt a rendelés leadása során.');
                    });
                }
            })
            .catch((error) => {
                console.error('Hálózati hiba:', error);
                alert('Nem sikerült csatlakozni a szerverhez.');
            });
    };


    return (
        <div className="orders-page-content">
            <h2>Rendelési lista</h2>
            {orderItems.length > 0 ? (
                <div>
                    <div className="order-items-list">
                        {orderItems.map((item) => (
                            <div className="order-item" key={item.id}>
                                <div>
                                    <p><strong>{item.name}</strong></p>
                                    <p>{item.description}</p>
                                    <p>{item.price} Ft</p>
                                </div>
                                <button
                                    className="remove-item-button"
                                    onClick={() => removeFromOrder(item.id)}
                                >
                                    Törlés
                                </button>
                            </div>
                        ))}
                    </div>
                    <button className="submit-order-button" onClick={handleSubmitOrder}>
                        Rendelés leadása
                    </button>
                    <button
                        className="clear-order-button"
                        onClick={clearOrder}
                        style={{ marginLeft: "10px", backgroundColor: "#ff5555", color: "#fff" }}
                    >
                        Kosár ürítése
                    </button>
                </div>
            ) : (
                <p>A kosár üres.</p>
            )}
        </div>
    );
};

export default OrdersPageContent;
