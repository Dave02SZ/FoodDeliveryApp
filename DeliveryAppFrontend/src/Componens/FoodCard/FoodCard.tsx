import "./FoodCard.css"

type FoodType = "PIZZA" | "BURGER" | "HOT_DOG" | "FRIES";

interface FoodIconProps {
    foodType: FoodType;
}

const FoodIcon: React.FC<FoodIconProps> = ({ foodType }) => {
    let imageSrc: string;

    switch (foodType) {
        case "PIZZA":
            imageSrc = "src/assets/foods/pizza.svg";
            break;
        case "BURGER":
            imageSrc = "src/assets/foods/burger.svg";
            break;
        case "HOT_DOG":
            imageSrc = "src/assets/foods/hotdog.svg";
            break;
        case "FRIES":
            imageSrc = "src/assets/foods/fries.svg";
            break;
        default:
            imageSrc = "src/images/star_purple500.png"; // Alapértelmezett kép
    }

    return (
        <img className="food-img" src={imageSrc} alt={foodType.toLowerCase()} />
    );
};

interface FoodCardProps {
    name: string;
    ingredients: string;
    additionalInfo: string;
    foodType: FoodType; // Itt is deklarálni kell, hogy foodType FoodType típusú
}

const FoodCard: React.FC<FoodCardProps> = ({ name, ingredients, additionalInfo, foodType }) => {

    return (
        <div className="food-card">
            <div className="food-card-title">
                <p>{name}</p>
                <FoodIcon foodType={foodType} />
            </div>
            <div className="food-card-ing-add-inf-container">
                <div className="food-card-ingr-container">
                    <p className="food-card-ingr-title">Összetevők: </p>
                    <p className="food-card-ingr-text">{ingredients}</p>
                </div>
                <div className="food-card-add-inf-container">
                    <p className="food-card-ingr-title">Plusz információ:</p>
                    <p className="food-card-ingr-text">{additionalInfo}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
