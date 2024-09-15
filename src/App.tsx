import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import AIAnalysis from "./pages/AIAnalysis.tsx";
import Contact from "./pages/Contact.tsx";
import SignIn from "./pages/SignIn.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ai-analysis" element={<AIAnalysis />} />
          <Route path="/blog" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
