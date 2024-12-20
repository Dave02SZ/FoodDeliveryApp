import "./HomePageContent.css"
import FoodCard from "../FoodCard/FoodCard.tsx";
import DrinkCard from "../DrinkCard/DrinkCard.tsx";


const HomePageContent = () => {

    return(
        <>
            <div className="homepagecontentmain">
                <div className="home-page-text">
                    <p>RENDELJ</p>
                    <p>ÉTTERMÜNKBŐL</p>
                </div>
                <div className="home-page-img">
                    <img src={"src/assets/FoodIcons.svg"}/>
                </div>
            </div>
            <div className="order-container">
                <p className="order-text">Rendelés</p>
                <div>
                    <FoodCard foodType={"BURGER"} ingredients={"Buci, burgerszósz, saláta"} name={"CheeseBurger"} additionalInfo={"Nagyon finom"}/>
                    <FoodCard foodType={"PIZZA"} ingredients={"paradicsomszósz, Mozzarella, Sonka"} name={"PepperoniPizza"} additionalInfo={"Nagyon finom"}/>
                    <FoodCard foodType={"HOT_DOG"} ingredients={"Kifli, virsli, majonéz"} name={"CheeseBurger"} additionalInfo={"Nagyon finom"}/>
                    <DrinkCard name={"Coca-Cola"} additionalInfo={"Nagyon édes"} drinkType={"SODA"}/>
                    <DrinkCard name={"Fanta"} additionalInfo={"Nagyon édes"} drinkType={"SODA"}/>
                    <DrinkCard name={"Espresso"} additionalInfo={"Meleg"} drinkType={"HOT"}/>
                    <DrinkCard name={"Epres Shake"} additionalInfo={"Nagyon édes"} drinkType={"SHAKE"}/>
                </div>
            </div>
        </>)
}

export default HomePageContent;