import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { CardGrid } from "./components/Card/CardGrid";
import { ValuesSection } from "./components/Values/ValuesSection";
import { Footer } from "./components/Footer/Footer";
import { Location } from "./components/Location/Location";
import { ServiceDescription } from "./components/Service/ServiceDescription";
import { ServicePage } from "./components/ServicePage/ServicePage"; // Страница услуги

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <ServiceDescription />
                        <CardGrid />
                        <Location />
                        <ValuesSection />
                    </>
                } />
                <Route path="/service/:serviceId" element={<ServicePage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
