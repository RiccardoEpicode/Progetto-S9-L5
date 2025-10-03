import "./App.css";
import { Gallery } from "./components/Gallery";
import Footer from "./components/navbar&footer/Footer";
import Navbar from "./components/navbar&footer/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
