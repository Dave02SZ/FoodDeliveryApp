import "./DrinkCard.css";

type DrinkType = "SODA" | "SHAKE" | "HOT"; // Drink típusok

interface DrinkIconProps {
    drinkType: DrinkType; // Átnevezzük foodType helyett drinkType-ra
}

export const DrinkIcon: React.FC<DrinkIconProps> = ({ drinkType }) => {
    let imageSrc: string;

    // Kép források a drinkType alapján
    switch (drinkType) {
        case "SODA":
            imageSrc = "src/assets/drinks/soda.svg";
            break;
        case "SHAKE":
            imageSrc = "src/assets/drinks/shake.svg";
            break;
        case "HOT":
            imageSrc = "src/assets/drinks/hot.svg";
            break;
        default:
            imageSrc = "src/images/star_purple500.png";
    }

    // Ha drinkType nem létezik, alapértelmezett értéket adunk
    return (
        <img
            className="drink-img"
            src={imageSrc}
            alt={drinkType ? drinkType.toLowerCase() : 'default'} // Biztosítjuk, hogy ne legyen undefined
        />
    );
};

interface DrinkCardProps {
    name: string;
    additionalInfo: string;
    drinkType: DrinkType;
    price: number;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ name, additionalInfo, drinkType, price }) => {
    return (
        <div className="drink-card">
            <div className="drink-card-title">
                <p>{name}</p>
                <DrinkIcon drinkType={drinkType} />
            </div>
            <div>
                <p className="drink-card-ingr-title">{price} Ft</p>
            </div>
            <div className="drink-card-add-inf-container">
                <p className="drink-card-ingr-title">Plusz információ:</p>
                <p className="drink-card-ingr-text">{additionalInfo}</p>
            </div>
        </div>
    );
};

export default DrinkCard;
