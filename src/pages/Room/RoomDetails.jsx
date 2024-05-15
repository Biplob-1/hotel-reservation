import { Link, useLoaderData } from "react-router-dom";

const RoomDetails = () => {
    const room = useLoaderData();
    // console.log(room);

    const isAvailable = room.availability;

    return (
        <div>
            <div className="border rounded-md overflow-hidden shadow-lg"> 
                <img src={room.image} className="w-full h-64 object-cover" />
                <div className="p-4">
                    <h2 className="text-xl text-center font-semibold mb-2">{room.room_description}</h2>
                    <p className="text-gray-700">{room.room_description}</p>
                    <div className="grid sm:grid-cols-2 grid-cols-4">
                        <p className="mt-2 text-gray-600">Price Per Night: {room.price_per_night}</p>
                        <p className="mt-2 text-gray-600">Room Size: {room.room_size}</p>
                        <p className={`mt-2 text-gray-600`}>Availability: <span className={`${isAvailable ? 'text-green-600' : 'text-red-600'}`}>{isAvailable ? 'Available' : 'Not Available'}</span></p>

                        <p className="mt-2 text-gray-600">Special Offers: {room.special_offers}</p>
                    </div>
                    
                    <p className="mt-2 text-gray-600"> Reviews: {room.rating}</p>
                    <Link to={`/bookRoom/${room._id}`}>
                        <button className="btn btn-primary" disabled={!isAvailable}>Book Now</button>
                    </Link>
                </div> 
            </div>
        </div>
    );
};

export default RoomDetails;
