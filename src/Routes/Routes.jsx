import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Room from "../pages/Room/Room";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import RoomBooking from "../pages/RoomBooking/RoomBooking";
import RoomDetails from "../pages/Room/RoomDetails";
import Booking from "../pages/Booking/Booking";
import BookingUpdate from "../pages/BookingUpdate/BookingUpdate";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
        },
        {
          path: '/rooms',
          element: <Room></Room>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/booking',
          element: <PrivateRoute><RoomBooking></RoomBooking></PrivateRoute>
        },
        {
          path: '/roomDetails/:id',
          element:<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/allRooms/${params.id}`),
        },
        {
          path:'/bookRoom/:id',
          element: <PrivateRoute><Booking></Booking></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/allRooms/${params.id}`),
        },
        {
          path:'/updateBookedRoom/:id',
          element: <PrivateRoute><BookingUpdate></BookingUpdate></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/updateBookedRoom/${params.id}`)
        }
      ]
    },
  ]);

  export default router;