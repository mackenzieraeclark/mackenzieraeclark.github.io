import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";

function Boroughd() {
    return ( 
        <div className="App-header">
            Borough'd
            <div className="container">
                <img src={one} alt="Mock" />
                <img src={two} alt="Mock" />
                <img src={three} alt="Mock" />
            </div>
        </div>
    );
}

export default Boroughd;