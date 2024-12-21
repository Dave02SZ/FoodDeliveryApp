import React, { useState } from "react";

import "./newItem.css"

// Food és Drink típusok definiálása
type FoodType = "PIZZA" | "BURGER" | "HOT_DOG" | "FRIES";
type DrinkType = "SODA" | "SHAKE" | "HOT";


const FoodDrinkCreator: React.FC = () => {
    const [itemType, setItemType] = useState<"FOOD" | "DRINK">("FOOD");
    const [foodType, setFoodType] = useState<FoodType | "">("");
    const [drinkType, setDrinkType] = useState<DrinkType | "">("");
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [price, setPrice] = useState<number>(0);

    const handleItemTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemType(e.target.value as "FOOD" | "DRINK");
    };

    const handleFoodTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFoodType(e.target.value as FoodType);
    };

    const handleDrinkTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDrinkType(e.target.value as DrinkType);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = {
            name,
            additionalInfo,
            price,
            ...(itemType === "FOOD"
                ? { foodType, ingredients }
                : { drinkType }),
        };

        const url =
            itemType === "FOOD"
                ? "http://localhost:8080/api/food/create"
                : "http://localhost:8080/api/drink/create";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Item created successfully!");
            } else {
                alert("Failed to create item.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while creating the item.");
        }
    };

    return (
        <div className="create-new-item">
            <h1>Create New Item</h1>
            <form onSubmit={handleSubmit} className="main-create-content">
                <div className="item-distance">
                    <label>Item Type</label>
                    <select value={itemType} onChange={handleItemTypeChange} className="input-field">
                        <option value="FOOD">Food</option>
                        <option value="DRINK">Drink</option>
                    </select>
                </div>

                <div className="item-distance">
                    <label>Name</label>
                    <input className="input-field"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="item-distance">
                    <label>Additional Info</label>
                    <input className="input-field"
                        type="text"
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        required
                    />
                </div>

                <div className="item-distance">
                    <label>Price</label>
                    <input className="input-field"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        required
                    />
                </div>

                {itemType === "FOOD" && (
                    <>
                        <div className="item-distance">
                            <label>Food Type</label>
                            <select value={foodType} onChange={handleFoodTypeChange} className="input-field">
                                <option value="">Select Food Type</option>
                                <option value="PIZZA">Pizza</option>
                                <option value="BURGER">Burger</option>
                                <option value="HOT_DOG">Hot Dog</option>
                                <option value="FRIES">Fries</option>
                            </select>
                        </div>

                        <div className="item-distance">
                            <label>Ingredients</label>
                            <input className="input-field"
                                type="text"
                                value={ingredients}
                                onChange={(e) => setIngredients(e.target.value)}
                                required
                            />
                        </div>
                    </>
                )}

                {itemType === "DRINK" && (
                    <div className="item-distance">
                        <label>Drink Type</label>
                        <select value={drinkType} onChange={handleDrinkTypeChange} className="input-field">
                            <option value="">Select Drink Type</option>
                            <option value="SODA">Soda</option>
                            <option value="SHAKE">Shake</option>
                            <option value="HOT">Hot</option>
                        </select>
                    </div>
                )}

                <button type="submit" className="create-new-button">Create Item</button>
            </form>
        </div>
    );
};

export default FoodDrinkCreator;
