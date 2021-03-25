import ReactGoogleSlides from 'react-google-slides';

import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";

function Boroughd() {
    return ( 
        <div className="App-header">
            <br/><br/><br/>
            Borough'd
            <div className="container">
                <img src={one} alt="Mock" />
                <img src={two} alt="Mock" />
                <img src={three} alt="Mock" />
            </div>
            <div>
                <ReactGoogleSlides
                width={320}
                height={320}
                slidesLink="https://docs.google.com/presentation/d/1231V9x2p8xWJrWRiRQtW5TyG07oTEhgn12qPeofyeNQ/"
                showControls
                />
            </div>
            <br/><br/><br/>
        </div>
    );
}

export default Boroughd;