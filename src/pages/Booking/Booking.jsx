import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const Booking = () => {
    const room = useLoaderData();
    const {_id } = room;
    const {user} = useContext(AuthContext)
    // console.log(user);
    // console.log(room);


    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = e.target;

        const userName = form.userName.value;
        const email = form.email.value;
        const roomName = form.roomName.value;
        const pricePerNight = form.price.value;
        const date = form.date.value;

        const roomBooking = {
            customerName: userName,
            email,
            roomName,
            pricePerNight,
            date,
            bookId: _id,
        }
        console.log(roomBooking); 
        fetch('http://localhost:5000/roomBookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(roomBooking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <h3 className="text-xl font-semibold">Room Booking</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="username" className="text-sm font-semibold">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="userName"
                        defaultValue={user?.displayName}
                        required
                        readOnly
                        className="mt-1 p-2 border rounded-md"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        defaultValue={user?.email}
                        required
                        readOnly
                        className="mt-1 p-2 border rounded-md"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="roomName" className="text-sm font-semibold">Room Name:</label>
                    <input
                        type="text"
                        id="roomName"
                        name='roomName'
                        defaultValue={room.room_description} 
                        readOnly
                        className="mt-1 p-2 border rounded-md bg-gray-100"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="price" className="text-sm font-semibold">Price:</label>
                    <input
                        type="text"
                        id="price"
                        name='price'
                        defaultValue={room.price_per_night} 
                        readOnly
                        className="mt-1 p-2 border rounded-md bg-gray-100"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="date" className="text-sm font-semibold">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name='date'
                        required
                        className="mt-1 p-2 border rounded-md"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Booking;
