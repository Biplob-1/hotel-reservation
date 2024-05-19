import CustomerReviews from "../CustomerReviews/CustomerReviews";
import FeturedRooms from "../FeturedRooms/FeturedRooms";
import NewsletterSignup from "../NewsletterSignup/NewsletterSignup";
import Slider from "../Slider/Slider";

const Home = () => {
    return(
        <div>
            <Slider></Slider>
            <FeturedRooms></FeturedRooms>
            <CustomerReviews></CustomerReviews>
            <NewsletterSignup></NewsletterSignup>
        </div>
    )
};
export default Home;