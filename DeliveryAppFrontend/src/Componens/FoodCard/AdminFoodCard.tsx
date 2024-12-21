import "./AdminFoodCard.css";
import React, { useState } from "react";
import { FoodType } from "../HomePageContent/AdminHomePageContent.tsx";
import FoodEditCard from "./FoodEditCard.tsx";
import { FoodIcon } from "./FoodCard.tsx";


interface AdminFoodCardProps {
    food: {
        id: number;
        name: string;
        ingredients: string;
        description: string;
        foodType: FoodType;
        price: number;
    };
    onDelete: (id: number) => void;

}

const AdminFoodCard: React.FC<AdminFoodCardProps> = ({ food, onDelete}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [foodData, setFoodData] = useState<AdminFoodCardProps[]>([]);

    const handleEdit = () => {
        setIsEditing(true); // Switch to edit mode
    };

    const handleSave = async (updatedFood: {
        id: number;
        name: string;
        ingredients: string;
        description: string;
        foodType: FoodType;
        price: number;
    }) => {
        try {
            setIsEditing(false);
            // Make a PUT request to update the food item
            const response = await fetch(`http://localhost:8080/api/food/${updatedFood.id}/update`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedFood),
            });

            if (response.ok) {
                const updatedFoodData = await response.json(); // Backend response

                // Update foodData with the updated food
                setFoodData((prevData) =>
                    prevData.map((food) =>
                        food.food.id === updatedFoodData.id ? updatedFoodData : food.food
                    )
                );


            } else {
                console.error("Failed to update food");
            }
        } catch (error) {
            console.error("Error updating food:", error);
        }
        return foodData
    };


    const handleCancel = () => {
        setIsEditing(false);
        // Exit edit mode
    };


    return (
        <div className="admin-food-card">
            {isEditing ? (
                <FoodEditCard
                    food={food}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            ) : (
                <>
                    <div className="admin-food-card-title">
                        <div>
                            <div className="admin-del-edit-food">
                                <img
                                    src="src/assets/delete.svg"
                                    alt="delete"
                                    onClick={() => onDelete(food.id)}
                                />
                                <img
                                    src="src/assets/edit.svg"
                                    alt="edit"
                                    onClick={handleEdit}
                                />
                            </div>
                            <p>{food.name}</p>
                        </div>

                        <FoodIcon foodType={food.foodType} />
                    </div>

                    <div>
                        <p className="admin-food-card-ingr-title">{food.price} Ft</p>
                    </div>
                    <div className="admin-food-card-add-inf-container">
                        <div className="admin-food-card-ingr-container">
                            <p className="admin-food-card-ingr-title">Ingredients:</p>
                            <p className="admin-food-card-ingr-text">{food.ingredients}</p>
                        </div>
                        <div className="admin-food-card-add-inf-container">
                            <p className="admin-food-card-ingr-title">Additional Information:</p>
                            <p className="admin-food-card-ingr-text">{food.description}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AdminFoodCard;
