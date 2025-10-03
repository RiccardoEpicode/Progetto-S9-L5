import "./App.css";
import Footer from "./components/navbar&footer/Footer";
import Navbar from "./components/navbar&footer/Navbar";
import Gallery from "./components/Gallery";

// IMPORTS FOR SLICK CAROUSEL

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TvShowsBar from "./components/TvShowsBar";

function App() {
  return (
    <div>
      <Navbar />
      <TvShowsBar />
      <Gallery query="Harry Potter" title="Trending Now" />
      <Gallery query="Lord of the Rings" title="Watch It Again" />
      <Gallery query="Star Wars" title="New Release" />
      <Footer />
    </div>
  );
}

export default App;
