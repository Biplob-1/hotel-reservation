import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const RoomDetails = () => {
    const {user} = useContext(AuthContext);
    const room = useLoaderData();
    const isAvailable = room.availability;
    const [reviews, setReviews] = useState([]);

    const fetchReviews = async () => {
        try {
            const response = await axios.get('http://localhost:5000/allReviews')
            setReviews(response.data.filter(item => item.roomName === room.roomName));
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchReviews();
    }, [user]);
    console.log('alll revies in view details page', reviews);

    return (
        <div>
            <div className="border rounded-md overflow-hidden shadow-lg"> 
                <img src={room.image} className="w-full h-64 object-cover" />
                <div className="p-4">
                    <h2 className="text-xl text-center font-semibold mb-2">{room.roomName}</h2>
                    <p className="text-gray-700">{room.room_description}</p>
                    <div className="grid sm:grid-cols-2 grid-cols-4">
                        <p className="mt-2 text-gray-600">Price Per Night: ${room.price_per_night}</p>
                        <p className="mt-2 text-gray-600">Room Size: {room.room_size}</p>
                        <p className={`mt-2 text-gray-600`}>Availability: <span className={`${isAvailable ? 'text-green-600' : 'text-red-600'}`}>{isAvailable ? 'Available' : 'Not Available'}</span></p>
                        <p className="mt-2 text-gray-600">Special Offers: {room.special_offers}</p>
                        <p className="mt-2 text-gray-600"> Rating: {room.averageRating}</p>
                        <p className="mt-2 text-gray-600"> All Reviews: {room.numberOfReviews}</p>
                    </div>
                    
                    
                    <div>
                        
                    </div>
                    <div className="flex justify-center mt-5">
                        <Link to={`/bookRoom/${room._id}`}>
                            <button className="btn btn-primary" disabled={!isAvailable}>Book Now</button>
                        </Link>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default RoomDetails;
