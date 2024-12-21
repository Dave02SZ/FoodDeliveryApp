import "./HomePageContent.css";
import { useEffect, useState } from "react";
import AdminDrinkCard from "../DrinkCard/AdminDrinkCard.tsx";
import AdminFoodCard from "../FoodCard/AdminFoodCard.tsx";

export enum DrinkType {
    SODA = "SODA",
    SHAKE = "SHAKE",
    HOT = "HOT",
}

export enum FoodType {
    PIZZA = "PIZZA",
    BURGER = "BURGER",
    HOT_DOG = "HOT_DOG",
    FRIES = "FRIES",
}

interface DrinkCardProps {
    id: number;
    name: string;
    description: string;
    drinkType: DrinkType;
    price: number;
}

interface FoodCardProps {
    id: number;
    name: string;
    ingredients: string;
    additionalInfo: string;
    foodType: FoodType;
    price: number;
}

const AdminHomePageContent = () => {
    const [drinkData, setDrinkData] = useState<DrinkCardProps[]>([]);
    const [foodData, setFoodData] = useState<FoodCardProps[]>([]);
    const [loadingDrinks, setLoadingDrinks] = useState(true);
    const [loadingFoods, setLoadingFoods] = useState(true);


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
                setLoadingDrinks(false);
            }
        };

        const fetchFoods = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/food");
                if (response.ok) {
                    const data = await response.json();
                    setFoodData(data);
                } else {
                    console.error("Failed to fetch foods.");
                }
            } catch (error) {
                console.error("Error fetching foods:", error);
            } finally {
                setLoadingFoods(false);
            }
        };

        fetchDrinks();
        fetchFoods();
    }, []);


    const handleDeleteDrink = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8080/api/drink/${id}/delete`, {
                method: "DELETE",
            });
            if (response.ok) {
                setDrinkData(drinkData.filter((drink) => drink.id !== id));
            } else {
                console.error("Failed to delete drink");
            }
        } catch (error) {
            console.error("Error deleting drink:", error);
        }
    };

    const handleDeleteFood = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8080/api/food/${id}/delete`, {
                method: "DELETE",
            });
            if (response.ok) {
                setFoodData(foodData.filter((food) => food.id !== id));
            } else {
                console.error("Failed to delete food");
            }
        } catch (error) {
            console.error("Error deleting food:", error);
        }
    };

    return (
        <div className="order-container">
            <p className="order-text">Admin Drinks</p>
            <div className="element-container">
                {loadingDrinks ? (
                    <p>Loading drinks...</p>
                ) : (
                    drinkData.map((drink) => (
                        <AdminDrinkCard key={drink.id} drink={drink} onDelete={handleDeleteDrink} />
                    ))
                )}
            </div>

            <p className="order-text">Admin Foods</p>
            <div className="element-container">
                {loadingFoods ? (
                    <p>Loading foods...</p>
                ) : (
                    foodData.map((food) => (
                        <AdminFoodCard key={food.id} food={food} onDelete={handleDeleteFood} />
                    ))
                )}
            </div>
        </div>
    );
};

export default AdminHomePageContent;
