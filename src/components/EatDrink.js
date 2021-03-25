import ReactGoogleSlides from 'react-google-slides';

import seven from "../assets/7.png";
import eight from "../assets/8.png";
import nine from "../assets/9.png";

function EatDrink() {
    return ( 
        <div className="App-header">
            <br/><br/><br/>
            Eat & Drink
            <div className="container">
                <img src={seven} alt="Mock" />
                <img src={eight} alt="Mock" />
                <img src={nine} alt="Mock" />
            </div>
            <div className="hide">
                <ReactGoogleSlides
                width={600}
                height={480}
                slidesLink="https://docs.google.com/presentation/d/1P0hCt3BgafeGDQx1uszJzlRdZtIioHAcCN822fE21cc/"
                showControls
                />
            </div>
            <br/><br/><br/>
        </div>
    );
}

export default EatDrink;