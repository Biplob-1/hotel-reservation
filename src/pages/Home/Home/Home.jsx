import CustomerReviews from "../CustomerReviews/CustomerReviews";
import FeturedRooms from "../FeturedRooms/FeturedRooms";
import Location from "../Location/Location";
import NewsletterSignup from "../NewsletterSignup/NewsletterSignup";
import OfferModal from "../OfferModal/OfferModal";
import Slider from "../Slider/Slider";

const Home = () => {
    
    return(
        <div>
            <OfferModal></OfferModal>
            {/* <Slider></Slider> */}
            <FeturedRooms></FeturedRooms>
            <Location></Location>
            <CustomerReviews></CustomerReviews>
            <NewsletterSignup></NewsletterSignup>
        </div>
    )
};
export default Home;