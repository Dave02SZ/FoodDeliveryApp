import "./HomePageContent.css";
import { useEffect, useState } from "react";
import AdminDrinkCard from "../DrinkCard/AdminDrinkCard.tsx";

export enum DrinkType {
    SODA = "SODA",
    SHAKE = "SHAKE",
    HOT = "HOT",
}

interface DrinkCardProps {
    id: number;
    name: string;
    description: string;
    drinkType: DrinkType;
    price: number;
}

const AdminHomePageContent = () => {
    const [drinkData, setDrinkData] = useState<DrinkCardProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/drink");
                if (response.ok) {
                    const data = await response.json();
                    setDrinkData(data);
                } else {
                    console.error("Failed to fetch drinks.");
                }
            } catch (error) {
                console.error("Error fetching drinks:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDrinks();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8080/api/drink/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setDrinkData(drinkData.filter((drink) => drink.id !== id)); // Frissítjük az italkártyák listáját
            } else {
                console.error("Failed to delete drink");
            }
        } catch (error) {
            console.error("Error deleting drink:", error);
        }
    };

    return (
        <div className="order-container">
            <p className="order-text">Admin Drinks</p>
            <div className="element-container">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    drinkData.map((drink) => (
                        <AdminDrinkCard key={drink.id} drink={drink} onDelete={handleDelete} />
                    ))
                )}
            </div>
        </div>
    );
};

export default AdminHomePageContent;