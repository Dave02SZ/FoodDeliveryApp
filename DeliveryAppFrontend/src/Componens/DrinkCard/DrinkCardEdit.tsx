import "./EditDrinkCard.css"

import React, { useState } from "react";
import { DrinkType } from "../HomePageContent/AdminHomePageContent"; // Importáld a DrinkType-t

interface DrinkEditCardProps {
    drink: { id: number; name: string; description: string; drinkType: DrinkType; price: number };
    onSave: (updatedDrink: { id: number; name: string; description: string; drinkType: DrinkType; price: number }) => void;
    onCancel: () => void;
}

const DrinkEditCard: React.FC<DrinkEditCardProps> = ({ drink, onSave, onCancel }) => {
    const [editableDrink, setEditableDrink] = useState(drink); // Kezdeti állapot a drink objektumból

    const handleSubmitEdit = () => {
        // Küldjük el a frissített adatokat
        onSave(editableDrink);
    };

    return (
        <div className="edit-drink-card">
            <h2>Edit Drink</h2>
            <div className="drink-input-field">
                <div className="drink-data-with-name">
                    <p>Név: </p>
                    <input
                        type="text"
                        value={editableDrink.name}
                        onChange={(e) => setEditableDrink({...editableDrink, name: e.target.value})}
                        placeholder="Drink name"
                    />
                </div>
                <div className="drink-data-with-name">
                    <p>Leírás: </p>
                    <textarea
                        value={editableDrink.description}
                        onChange={(e) => setEditableDrink({...editableDrink, description: e.target.value})}
                        placeholder="Description"
                    />
                </div>

                <div className="drink-data-with-name">
                    <p>Típus: </p>
                    <select
                        value={editableDrink.drinkType}
                        onChange={(e) => setEditableDrink({...editableDrink, drinkType: e.target.value as DrinkType})}
                    >
                        <option value="SODA">Soda</option>
                        <option value="SHAKE">Shake</option>
                        <option value="HOT">Hot</option>
                    </select>
                </div>

                <div className="drink-data-with-name">
                    <p>Forint: </p>
                    <input
                        type="number"
                        value={editableDrink.price}
                        onChange={(e) => setEditableDrink({...editableDrink, price: +e.target.value})}
                        placeholder="Price"
                    />
                </div>

            </div>

            <div className="drink-edit-delete-container">
                <button onClick={handleSubmitEdit}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>

        </div>
    );
};

export default DrinkEditCard;
