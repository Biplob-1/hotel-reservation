import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const FeturedRooms = () => {
    const [availableRooms, setAvailableRooms] = useState([]);
    const{loading, setLoading } = useContext(AuthContext);

    useEffect(() =>{
        setLoading (true)
        fetch('https://hotel-booking-server-eight.vercel.app/availabileRooms')
        .then(res => res.json())
        .then(data => {
            setAvailableRooms(data);
            setLoading (false)
        })
    },[setLoading]);

    if (loading) {
        return <div>Loading...</div>; 
    }
    return(
        <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Featured Room</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableRooms.map(room => (
                <div key={room._id} className="border rounded-md overflow-hidden shadow-lg"> 
                <Link to={`/roomDetails/${room._id}`}>
                        <img src={room.image}  className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{room.roomName}</h2>
                            <div className="flex justify-between">
                                <p className="mt-2 text-gray-600">Price: ${room.price_per_night}</p>
                                <p className="mt-2 text-gray-600">Total Reviews: {room.numberOfReviews}</p>
                            </div>
                            <button type="button" className="btn btn-primary w-full">Cheackout</button>
                            
                        </div>
                </Link>
                        
                </div>
            ))}
        </div>
    </div>
    )
};
export default FeturedRooms; 