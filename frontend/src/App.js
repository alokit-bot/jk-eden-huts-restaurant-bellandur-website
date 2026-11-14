import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Experience } from "./components/Experience";
import { Huts } from "./components/Huts";
import { Menu } from "./components/Menu";
import { Reviews } from "./components/Reviews";
import { Booking } from "./components/Booking";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";

function App() {
    return (
        <div className="App bg-[#FDFBF7]">
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <Experience />
                <Huts />
                <Menu />
                <Reviews />
                <Booking />
                <Location />
            </main>
            <Footer />
            <Toaster position="top-center" richColors />
        </div>
    );
}

export default App;
