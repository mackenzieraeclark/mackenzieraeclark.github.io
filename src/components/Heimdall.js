import ReactGoogleSlides from 'react-google-slides';

import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";

function Heimdall() {
    return ( 
        <div className="App-header">
            <br/><br/><br/>
            Heimdall
            <div className="container">
                <img src={four} alt="Mock" />
                <img src={five} alt="Mock" />
                <img src={six} alt="Mock" />
            </div>
            <div>
                <ReactGoogleSlides
                width={320}
                height={320}
                slidesLink="https://docs.google.com/presentation/d/1T-YdiHFYf2T5Q7RMeEUTXqrIl5LmTqEJ5Oa7vmZd1Z0/"
                showControls
                />
            </div>
            <br/><br/><br/>
        </div>
    );
}

export default Heimdall;