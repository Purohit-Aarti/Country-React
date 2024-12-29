import { FaLongArrowAltRight } from "react-icons/fa";


export default function HeroSection() {
    return (
        <div className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the World, One Country at a time.
                    </h1>
                    <p className="paragraph">
                        Discover the history, culture, and beauty of every nation. Sort, search, and filter through the world's countries and learn more about the places you've always wanted to visit.
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring <FaLongArrowAltRight />
                    </button>
                </div>
                <div className="hero-image">
                    <img className="banner-image" src="/Images/world.png" alt="Hero" />
                </div>
            </div>
        </div>
    )
}