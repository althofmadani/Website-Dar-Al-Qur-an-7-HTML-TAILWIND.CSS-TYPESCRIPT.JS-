import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DQMartHero from "@/components/sections/DQMartHero";
import DQMartCategories from "@/components/sections/DQMartCategories";
import DQMartCarePackages from "@/components/sections/DQMartCarePackages";
import DQMartProducts from "@/components/sections/DQMartProducts";
import DQMartDeliveryInfo from "@/components/sections/DQMartDeliveryInfo";

export default function DQMartPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <DQMartHero />
                <DQMartDeliveryInfo />
                <DQMartCategories />
                <DQMartCarePackages />
                <DQMartProducts />
            </main>
            <Footer />
        </div>
    );
}

