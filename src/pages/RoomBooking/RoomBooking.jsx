import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import BookingUpdate from "../BookingUpdate/BookingUpdate";

const RoomBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookedRooms, setBookedRooms] = useState([]);
    const [showModal, setShowModal] = useState(false); 
    const [selectedBooking, setSelectedBooking] = useState(null); 
    const fetchBookedRooms = async () => {
        try {
            const response = await axios.get('http://localhost:5000/bookedRooms')
            setBookedRooms(response.data.filter(item => item.email === user.email))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchBookedRooms();
    }, [user]);

    const handleUpdateClick = (booking) => {
        setSelectedBooking(booking);
        setShowModal(true);
    }

    return (
        <div>
            <h3>My Booked Rooms</h3>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Invoice Date</th>
                            <th className="px-4 py-2">Booking Date</th>
                            <th className="px-4 py-2">Room ID</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookedRooms.map((bookedRoom, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{bookedRoom.customerName}</td>
                                <td className="border px-4 py-2">{bookedRoom.date}</td>
                                <td className="border px-4 py-2">{bookedRoom.roomName}</td>
                                <td className="border px-4 py-2">{bookedRoom.pricePerNight}</td>
                                <td className="border px-4 py-2">
                                    <button className="btn btn-primary mr-2" onClick={() => handleCancel(bookedRoom)}>Cancel</button>
                                    <button className="btn btn-primary" onClick={() => handleUpdateClick(bookedRoom)}>Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* modal  */}
            {showModal && (
                <BookingUpdate
                    booking={selectedBooking}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}

export default RoomBooking;
