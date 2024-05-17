import { useEffect, useState } from "react";
import axios from "axios";

const BookingUpdate = ({ booking, onClose }) => {
    const [roomData, setRoomData] = useState(null);
    const [newDate, setNewDate] = useState(booking.date);

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
    
        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;
    
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/bookedRooms/${booking._id}`);
                setRoomData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        
        if (booking) {
            fetchRoomData();
        }
    }, [booking]);

    

    const handleConfirm = async () => {
        try {
            await axios.put(`http://localhost:5000/updateBookedRoom/${booking._id}`, {
                date: newDate 
            });
            onClose();
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    }

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <form className="bg-white p-8 rounded-md shadow-md">
                    <div className="flex flex-col">
                        <label htmlFor="date" className="text-sm font-semibold">Update Booking Date:</label>
                        <input
                            type="date"
                            id="date"
                            name='date'
                            min={getCurrentDate()}
                            value={newDate}
                            onChange={(e) => setNewDate(e.target.value)}
                            defaultValue={booking.date} 
                            required
                            className="mt-1 p-2 border rounded-md"
                        />
                    </div>
                    <div className="flex justify-between mt-4 gap-2">
                        <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
                        <button className="btn btn-primary" onClick={handleConfirm}>Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingUpdate;
