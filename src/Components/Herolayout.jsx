import Navbar from './Navbar';
import HeroSection from './HeroSection';
import '../styles/herolayout.css'

function HeroLayout() {
    return (
        <div className="hero-layout">
            <Navbar />
            <HeroSection />
        </div>
    );
}

export default HeroLayout;
