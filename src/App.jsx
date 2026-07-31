import About from "./components/About/About";
import Experience from "./components/Experience/Experance";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import FQA from "./components/FQA/FQA";
import Hero from "./components/Hero/Hero";
import Includes from "./components/Includes/Includes";
import Itinerary from "./components/Itinerary/Itinerary";
import Tours from "./components/Tours/Tours";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Itinerary />
      <Includes />
      <FQA />
      <Tours />
      <Explore />
      <Footer />
    </>
  );
}

export default App;
