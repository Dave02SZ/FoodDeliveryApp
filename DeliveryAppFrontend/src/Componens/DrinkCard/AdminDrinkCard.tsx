import "./AdminDrinkCard.css"
import { DrinkIcon } from "./DrinkCard.tsx"

import React, { useState } from "react";
import { DrinkType } from "../HomePageContent/AdminHomePageContent.tsx"; // Importáld a DrinkType-t
import DrinkEditCard from "./DrinkCardEdit.tsx"; // Importáld a DrinkEditCard komponenst

interface AdminDrinkCardProps {
    drink: { id: number; name: string; description: string; drinkType: DrinkType; price: number };
    onDelete: (id: number) => void; // Törlés funkció
}

const AdminDrinkCard: React.FC<AdminDrinkCardProps> = ({ drink, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true); // Edit módba váltunk
    };

    const handleSave = (updatedDrink: { id: number; name: string; description: string; drinkType: DrinkType; price: number }) => {
        // Itt kellene frissíteni a backend-et, például PUT kérés küldésével
        console.log("Saving edited drink:", updatedDrink);
        setIsEditing(false); // Elmentés után kilépünk az edit módból
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
