import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Room = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('https://hotel-booking-server-eight.vercel.app/allRooms')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[]);
    // console.log(availableRoom)
    return(
        <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Rooms</h1>
        <div className="flex justify-between mb-4">
            <div className="flex space-x-4">
                <input type="number" placeholder="Min Price" value=''  className="input input-bordered w-32" />
                <input type="number" placeholder="Max Price" value='' className="input input-bordered w-32" />
                <button  className="btn btn-primary">Filter</button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map(room => (
                <div key={room._id} className="border rounded-md overflow-hidden shadow-lg"> 
                <Link to={`/roomDetails/${room._id}`}>
                        <img src={room.image}  className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{room.room_description}</h2>
                            <p className="text-gray-700">{room.room_description}</p>
                            <p className="mt-2 text-gray-600">Price: {room.price_per_night}</p>
                            <p className="mt-2 text-gray-600">Total Reviews: {room.rating}</p>
                        </div>
                </Link>
                        
                </div>
            ))}
        </div>
    </div>
    )
};
export default Room;