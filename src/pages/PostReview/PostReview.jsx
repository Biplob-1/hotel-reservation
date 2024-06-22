import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import moment from 'moment-timezone';

const PostReview = ({ booking, onClose }) => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(1); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    

    const handleConfirm = async (e) => {
        e.preventDefault();
        setLoading(true);
        const utcDateTime = moment.utc();
        const localDateTime = utcDateTime.tz('Asia/Dhaka');
        const localISOString = localDateTime.toISOString();

        const currentDate = new Date();
        const updateCurrentToLocalDate = currentDate.toLocaleString();
        console.log(updateCurrentToLocalDate);
        
        const reviewData = {
            roomName: booking.roomName,
            userPhoto: user.photoURL,
            userEmail: user.email,
            rating: rating,
            review: review,
            // reviewDateTime: moment.tz('Asia/Dhaka').toISOString(),
            // reviewDateTime: currentDate,
            timestams: true
        };

        try {
            const response = await fetch('http://localhost:5000/allReviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reviewData)
            });

            if (!response.ok) {
                throw new Error('Failed to post review');
            }

            const result = await response.json();
            console.log('Review posted:', result);

            // Update room ratings
            await fetch(`http://localhost:5000/updateRoomRating/${booking.bookId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ rating })
            });

            onClose();
        } catch (error) {
            console.error('Error posting review:', error);
            setError('Failed to post review. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <form className="bg-white p-8 rounded-md shadow-md" onSubmit={handleConfirm}>
                    <div className="flex flex-col">
                        <label htmlFor="roomName" className="text-sm font-semibold">Room Name:</label>
                        <input
                            type="text"
                            id="roomName"
                            name='roomName'
                            defaultValue={booking.roomName}
                            readOnly
                            className="mt-1 p-2 border rounded-md"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="userEmail" className="text-sm font-semibold">User Email:</label>
                        <input
                            type="text"
                            id="userEmail"
                            name='userEmail'
                            defaultValue={user.email}
                            readOnly
                            className="mt-1 p-2 border rounded-md"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="userRating" className="text-sm font-semibold">Rating:</label>
                        <input
                            type="number"
                            id="userRating"
                            name='userRating'
                            min='1'
                            max='5'
                            value={rating}
                            onChange={(e) => setRating(parseInt(e.target.value))}
                            className="mt-1 p-2 border rounded-md"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="review" className="text-sm font-semibold">Your Review</label>
                        <textarea
                            name="review"
                            id="review"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            className="mt-1 p-2 border rounded-md"
                        />
                    </div>
                    <div className="flex justify-between mt-4 gap-2">
                        <button type="button" className="btn btn-secondary" onClick={onClose} disabled={loading}>Cancel</button>
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Submitting...' : 'Confirm'}
                        </button>
                    </div>
                    {error && <div className="text-red-500 mt-2">{error}</div>}
                </form>
            </div>
        </div>
    );
};

export default PostReview;
