import "./HomePageContent.css";
import FoodCard from "../FoodCard/FoodCard.tsx";
import DrinkCard from "../DrinkCard/DrinkCard.tsx";
import { useEffect, useState } from "react";

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

const HomePageContent = () => {
    const [drinkData, setDrinkData] = useState<DrinkCardProps[]>([]);
    const [foodData, setFoodData] = useState<FoodCardProps[]>([]);
    const [loadingDrinks, setLoadingDrinks] = useState(true);
    const [loadingFoods, setLoadingFoods] = useState(true);

    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/drink");
                if (response.ok) {
                    const data: DrinkCardProps[] = await response.json();
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
                    const data: FoodCardProps[] = await response.json();
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

    return (
        <>
            <div className="homepagecontentmain">
                <div className="home-page-text">
                    <p>RENDELJ</p>
                    <p>ÉTTERMÜNKBŐL</p>
                </div>
                <div className="home-page-img">
                    <img src="src/assets/FoodIcons.svg" alt="Food icons" />
                </div>
            </div>
            <div className="order-container">
                <p className="order-text">Rendelés</p>
                <p className="order-text">Ételek</p>
                <div className="element-container">
                    {loadingFoods ? (
                        <p>Ételek betöltése...</p>
                    ) : foodData.length > 0 ? (
                        foodData.map((food) => (
                            <FoodCard
                                key={food.id}
                                foodType={food.foodType}
                                ingredients={food.ingredients}
                                name={food.name}
                                additionalInfo={food.additionalInfo}
                                price={food.price}
                            />
                        ))
                    ) : (
                        <p>Nincs találat a keresési feltételek alapján.</p>
                    )}

                    {loadingDrinks ? (
                        <p>Italok betöltése...</p>
                    ) : drinkData.length > 0 ? (
                        drinkData.map((drink) => (
                            <DrinkCard
                                key={drink.id}
                                name={drink.name}
                                additionalInfo={drink.description}
                                drinkType={drink.drinkType}
                                price={drink.price}
                            />
                        ))
                    ) : (
                        <p>Nincs találat a keresési feltételek alapján.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default HomePageContent;
