import axios from "axios";
import { useState } from "react";

const DeleteBookedRoom = ({ booking, onClose }) => {
    const handleConfirm = async () => {
        try {
            await axios.delete(`https://hotel-booking-server-eight.vercel.app/deleteBookedRoom/${booking._id}`);
            // onClose();
        } catch (error) {
            console.error('Error deleting Booking:', error);
        }
    };

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <form className="bg-white p-8 rounded-md shadow-md">
                <h3 className="text-2xl text-center font-extrabold text-red-600 mb-4">Are You sure?</h3>
                    <div className="flex justify-between mt-4 gap-2">
                        <button className="btn btn-secondary" onClick={onClose}>No</button>
                        <button className="btn btn-primary" onClick={handleConfirm}>Yes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeleteBookedRoom;
