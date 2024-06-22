import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import BookingUpdate from "../BookingUpdate/BookingUpdate";
import DeleteBookedRoom from "../DeleteBookedRoom/DeleteBookedRoom";
import PostReview from "../PostReview/PostReview";

const RoomBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookedRooms, setBookedRooms] = useState([]);
    const [showModal, setShowModal] = useState(false); 
    const [selectedBooking, setSelectedBooking] = useState(null); 
    const [modalType, setModalType] = useState(null);
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
        setModalType('update');
        setShowModal(true);
    }
    const handleDeleteBooking = (booking) => {
        setSelectedBooking(booking);
        setModalType('delete');
        setShowModal(true);
    }

    const handleReview = (booking) => {
        setSelectedBooking(booking);
        setModalType('review');
        setShowModal(true);
    }

    const renderModal = () => {
        if (modalType === 'update') {
            return (
                <BookingUpdate
                    booking={selectedBooking}
                    onClose={() => setShowModal(false)}
                />
            );
        } else if (modalType === 'delete') {
            return (
                <DeleteBookedRoom
                    booking={selectedBooking}
                    onClose={() => setShowModal(false)}
                />
            );
        }else if (modalType === 'review'){
            return(
                <PostReview
                booking={selectedBooking}
                onClose={() =>setShowModal(false)}
                ></PostReview>
            )
        }
        return null; 
    };

    return (
        <div>
            <h3 className="text-3xl font-bold text-center my-5">My Booked Rooms</h3>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Booking Time</th>
                            <th className="px-4 py-2">Booking Date</th>
                            <th className="px-4 py-2">Room Name</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookedRooms.map((bookedRoom, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{bookedRoom.bookingTime}</td>
                                <td className="border px-4 py-2">{bookedRoom.date}</td>
                                <td className="border px-4 py-2">{bookedRoom.roomName}</td>
                                <td className="border px-4 py-2">${bookedRoom.pricePerNight}</td>
                                <td className="border px-4 py-2">
                                    <button className="btn btn-primary mr-2" onClick={() => handleDeleteBooking(bookedRoom)}>Cancel</button>
                                    <button className="btn btn-primary mr-2" onClick={() => handleUpdateClick(bookedRoom)}>Update</button>
                                    <button className="btn btn-primary" onClick={() => handleReview(bookedRoom)}>Review</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showModal && renderModal()}
        </div>
    );
}

export default RoomBooking;
