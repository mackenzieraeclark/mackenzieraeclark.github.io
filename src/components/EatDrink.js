import seven from "../assets/7.png";
import eight from "../assets/8.png";
import nine from "../assets/9.png";

function EatDrink() {
    return ( 
        <div className="App-header">
            Eat & Drink
            <div className="container">
                <img src={seven} alt="Mock" />
                <img src={eight} alt="Mock" />
                <img src={nine} alt="Mock" />
            </div>
        </div>
    );
}

export default EatDrink;