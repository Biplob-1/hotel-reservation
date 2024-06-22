import { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaTimes } from 'react-icons/fa';
import Slider from "../Slider/Slider";

const OfferModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const modalContentStyle = {
    width: '400px',
    height: '400px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    position: 'absolute',
    backgroundImage: 'url(https://i.ibb.co/bvHkL8g/8.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={{ position: 'relative' }}>
      <Slider />
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Special Offers and Promotions"
        style={{ content: modalContentStyle }}
      >
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <FaTimes onClick={() => setShowModal(false)} style={{ cursor: 'pointer' }} />
        </div>
        <div className="text-white flex flex-col items-center justify-center h-full">
          <h2 className="text-5xl font-extrabold text-red-600">40% OFF</h2>
          <p className="text-2xl font-semibold">On Online Booking!!!</p>
          <button className="btn btn-primary mt-4">Book Now</button>
        </div>
      </Modal>
    </div>
  );
};

export default OfferModal;
