import "../FoodCard/EditFoodCard.css"; // Assuming this is for food styling
import React, { useState } from "react";
import { FoodType } from "../HomePageContent/AdminHomePageContent"; // Import the FoodType

interface FoodEditCardProps {
    food: {
        id: number;
        name: string;
        ingredients: string;
        additionalInfo: string;
        foodType: FoodType;
        price: number;
    };
    onSave: (updatedFood: {
        id: number;
        name: string;
        ingredients: string;
        additionalInfo: string;
        foodType: FoodType;
        price: number;
    }) => void;
    onCancel: () => void;
}

const FoodEditCard: React.FC<FoodEditCardProps> = ({ food, onSave, onCancel }) => {
    const [editableFood, setEditableFood] = useState(food); // Initialize state with the food object


    const handleSubmitEdit = () => {
        // Send the updated data to the parent
        onSave(editableFood);
    };

    return (
        <div className="edit-food-card">
            <h2>Edit Food</h2>
            <div className="food-input-field">
                <div className="food-data-with-name">
                    <p>Name: </p>
                    <input
                        type="text"
                        value={editableFood.name}
                        onChange={(e) => setEditableFood({ ...editableFood, name: e.target.value })}
                        placeholder="Food name"
                    />
                </div>

                <div className="food-data-with-name">
                    <p>Ingredients: </p>
                    <textarea
                        value={editableFood.ingredients}
                        onChange={(e) => setEditableFood({ ...editableFood, ingredients: e.target.value })}
                        placeholder="Ingredients"
                    />
                </div>

                <div className="food-data-with-name">
                    <p>Food Type: </p>
                    <select
                        value={editableFood.foodType}
                        onChange={(e) => setEditableFood({ ...editableFood, foodType: e.target.value as FoodType })}
                    >
                        <option value="PIZZA">Pizza</option>
                        <option value="BURGER">Burger</option>
                        <option value="HOT_DOG">Hot Dog</option>
                        <option value="FRIES">Fries</option>
                    </select>
                </div>

                <div className="food-data-with-name">
                    <p>Price: </p>
                    <input
                        type="number"
                        value={editableFood.price}
                        onChange={(e) => setEditableFood({ ...editableFood, price: +e.target.value })}
                        placeholder="Price"
                    />
                </div>

                <div className="food-data-with-name">
                    <p>Additional Info: </p>
                    <textarea
                        value={editableFood.additionalInfo}
                        onChange={(e) => setEditableFood({ ...editableFood, additionalInfo: e.target.value })}
                        placeholder="Additional information"
                    />
                </div>
            </div>

            <div className="food-edit-delete-container">
                <button onClick={handleSubmitEdit}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default FoodEditCard;
