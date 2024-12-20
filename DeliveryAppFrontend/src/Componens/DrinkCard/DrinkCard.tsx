import "./DrinkCard.css"; // Ne felejtsd el a CSS fájl nevét is módosítani, ha szükséges

type DrinkType = "SODA" | "SHAKE" | "HOT"; // Drink típusok

interface DrinkIconProps {
    drinkType: DrinkType; // Átnevezzük foodType helyett drinkType-ra
}

const DrinkIcon: React.FC<DrinkIconProps> = ({ drinkType }) => {
    let imageSrc: string;

    switch (drinkType) {
        case "SODA":
            imageSrc = "src/assets/drinks/soda.svg"; // Kép helye
            break;
        case "SHAKE":
            imageSrc = "src/assets/drinks/shake.svg"; // Kép helye
            break;
        case "HOT":
            imageSrc = "src/assets/drinks/hot.svg"; // Kép helye
            break;
        default:
            imageSrc = "src/images/star_purple500.png"; // Alapértelmezett kép
    }

    return (
        <img className="drink-img" src={imageSrc} alt={drinkType.toLowerCase()} />
    );
};

interface DrinkCardProps {
    name: string;
    additionalInfo: string; // Ingredients eltávolítva
    drinkType: DrinkType;
    price: number;// A drinkType típus
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
