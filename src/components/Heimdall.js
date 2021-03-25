import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";

function Heimdall() {
    return ( 
        <div className="App-header">
            Heimdall
            <div className="container">
                <img src={four} alt="Mock" />
                <img src={five} alt="Mock" />
                <img src={six} alt="Mock" />
            </div>
        </div>
    );
}

export default Heimdall;