import "./HomePageContent.css";
import FoodCard from "../FoodCard/FoodCard.tsx";
import DrinkCard from "../DrinkCard/DrinkCard.tsx";
import { useEffect, useState } from "react";

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

const HomePageContent = () => {
    const [drinkData, setDrinkData] = useState<DrinkCardProps[]>([]);
    const [loading, setLoading] = useState(true);

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
                setLoading(false);
            }
        };

        fetchDrinks();
    }, []);

    drinkData.map((drink) => (console.log(drink)))

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
                    <FoodCard
                        foodType={"BURGER"}
                        ingredients={"Buci, burgerszósz, saláta"}
                        name={"CheeseBurger"}
                        additionalInfo={"Nagyon finom"}
                        price={2000}
                    />
                    <FoodCard
                        foodType={"PIZZA"}
                        ingredients={"paradicsomszósz, Mozzarella, Sonka"}
                        name={"PepperoniPizza"}
                        additionalInfo={"Nagyon finom"}
                        price={4000}
                    />
                    <FoodCard
                        foodType={"HOT_DOG"}
                        ingredients={"Kifli, virsli, majonéz"}
                        name={"CheeseBurger"}
                        additionalInfo={"Nagyon finom"}
                        price={4000}
                    />
                    {loading ? (
                        <p>Adatok betöltése...</p>
                    ) : drinkData.length > 0 ? (
                        drinkData.map((drink) => (

                            <DrinkCard
                                key={drink.id} // Egyedi 'key' hozzáadása
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
