import "./AdminDrinkCard.css"
import { DrinkIcon } from "./DrinkCard.tsx"

import React, { useState } from "react";
import {DrinkType} from "../HomePageContent/AdminHomePageContent.tsx";
import DrinkEditCard from "./DrinkCardEdit.tsx";

interface AdminDrinkCardProps {
    drink: {
        id: number;
        name: string;
        description:string;
        drinkType: DrinkType;
        price: number };

    onDelete: (id: number) => void; // Törlés funkció
}

const AdminDrinkCard: React.FC<AdminDrinkCardProps> = ({ drink, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [drinkData, setDrinkData] = useState<AdminDrinkCardProps[]>([]);

    const handleEdit = () => {
        setIsEditing(true); // Edit módba váltunk
    };

    const handleSave = async (updatedDrink: {
        id: number;
        name: string;
        description: string;
        drinkType: DrinkType;
        price: number;
    }) => {
        try {
            setIsEditing(false);
            // Make a PUT request to update the food item
            const response = await fetch(`http://localhost:8080/api/drink/${updatedDrink.id}/update`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedDrink),
            });

            if (response.ok) {
                const updatedDrinkData = await response.json(); // Backend response

                // Update foodData with the updated food
                setDrinkData((prevData) =>
                    prevData.map((drink) =>
                        drink.drink.id === updatedDrinkData.id ? updatedDrinkData : drink.drink
                    )
                );


            } else {
                console.error("Failed to update drink");
            }
        } catch (error) {
            console.error("Error updating drink:", error);
        }
        return drinkData
    };


    const handleCancel = () => {
        setIsEditing(false); // Kilépünk az edit módból
    };

    return (
        <div className="admin-drink-card">
            {isEditing ? (
                <DrinkEditCard drink={drink} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <>
                    <div className="admin-drink-card-title">
                        <div>
                            <div className="admin-del-edit-drink">
                                <img src="src/assets/delete.svg" alt="delete" onClick={() => onDelete(drink.id)}/>
                                <img src="src/assets/edit.svg" alt="edit" onClick={handleEdit}/>
                            </div>
                            <p>{drink.name}</p>
                        </div>

                        <DrinkIcon drinkType={drink.drinkType}/>
                    </div>

                    <div>
                        <p className="admin-drink-card-ingr-title">{drink.price} Ft</p>
                    </div>
                    <div className="admin-drink-card-add-inf-container">
                        <p className="admin-drink-card-ingr-title">Plusz információ:</p>
                        <p className="admin-drink-card-ingr-text">{drink.description}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default AdminDrinkCard;
