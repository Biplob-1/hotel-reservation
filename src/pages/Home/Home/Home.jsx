import CustomerReviews from "../CustomerReviews/CustomerReviews";
import NewsletterSignup from "../NewsletterSignup/NewsletterSignup";
import Slider from "../Slider/Slider";

const Home = () => {
    return(
        <div>
            <Slider></Slider>
            <CustomerReviews></CustomerReviews>
            <NewsletterSignup></NewsletterSignup>
        </div>
    )
};
export default Home;