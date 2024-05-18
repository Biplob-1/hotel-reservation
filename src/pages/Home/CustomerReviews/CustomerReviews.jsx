import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";

const CustomerReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    // console.log(user)

    const fetchReviews = async () => {
        try {
            const response = await axios.get('http://localhost:5000/allReviews')
            setReviews(response.data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchReviews();
    }, []);
    // console.log('all review show:',reviews)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return(
        <div className="bg-slate-400">
            <h3 className="text-2xl text-center font-semibold pt-10 font-dancing-script ">What Says Our Customers</h3>
            <div className="w-3/4 m-auto">
                <div className="py-20">
                    <Slider {...settings}>
                    {reviews.map(review =>(
                        <div className="bg-white h-[450px] text-black rounded-xl">
                            <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                                <img src={review.userPhoto} alt={review.userEmail} className="h-44 w-44 rounded-full"/>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4 p-4">
                                <p className="text-xl font-semibold">{review.userEmail}</p>
                                <p>{review.review}</p>
                                <p>{review.rating}</p>
                                <p>{review.reviewDateTime}</p>
                                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button>
                            </div>
                        </div>
                        
                      ))} 
                    </Slider>
                </div>
            </div>
        </div>
    )
};
export default CustomerReviews;