import Card from "./components/card/Card";
import Carousel from "./components/carousel/Carousel";
import Carousel2nd from "./components/carousel/Carousel2nd";
import Footer from "./components/footer/Footer";
import Highlights from "./components/highlights/Highlights";
import Navbar from "./components/navbar/Navbar";
import Times from "./components/times/Times";

function App() {
    const carouselImg = {
        img1: "https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082__480.jpg",
        img2: "https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804__480.jpg",
        img3: "https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944__480.jpg",
        img4: "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880__480.jpg",
        img5: "https://cdn.pixabay.com/photo/2019/05/26/08/00/handshake-4229703__480.jpg",
        img6: "https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079__480.jpg",
    };

    return (
        <div className="App">
            <Navbar />
            <Carousel carImg={carouselImg} />
            <Times />
            <Carousel2nd carImg={carouselImg} />
            <Card carImg={carouselImg}/>
            <Highlights/>
            <Footer/>
        </div>
    );
}

export default App;
