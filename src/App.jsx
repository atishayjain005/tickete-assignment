import Navbar from "./components/Navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PaymentDetails from "./sections/payment-details";
import Faq from "./sections/faq";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <PaymentDetails />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
