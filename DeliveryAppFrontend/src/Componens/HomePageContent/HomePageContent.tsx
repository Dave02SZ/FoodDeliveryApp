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
                <div className="element-container">
                    <FoodCard foodType={"BURGER"} ingredients={"Buci, burgerszósz, saláta"} name={"CheeseBurger"} additionalInfo={"Nagyon finom"} price={2000}/>
                    <FoodCard foodType={"PIZZA"} ingredients={"paradicsomszósz, Mozzarella, Sonka"} name={"PepperoniPizza"} additionalInfo={"Nagyon finom"} price={4000}/>
                    <FoodCard foodType={"HOT_DOG"} ingredients={"Kifli, virsli, majonéz"} name={"CheeseBurger"} additionalInfo={"Nagyon finom"} price={4000}/>
                    <DrinkCard name={"Coca-Cola"} additionalInfo={"Nagyon édes"} drinkType={"SODA"} price={1000}/>
                    <DrinkCard name={"Fanta"} additionalInfo={"Nagyon édes"} drinkType={"SODA"} price={2000}/>
                    <DrinkCard name={"Espresso"} additionalInfo={"Meleg"} drinkType={"HOT"} price={3000}/>
                    <DrinkCard name={"Epres Shake"} additionalInfo={"Nagyon édes"} drinkType={"SHAKE"} price={4000}/>
                </div>
            </div>
        </>)
}

export default HomePageContent;