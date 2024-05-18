import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <div>
            <div className="mt-2 lg:mt-5 mb-5">
            <Swiper

                navigation={true}
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={
                    { delay: 3000 }
                }
                pagination={{
                    clickable: true,
                }}


            >
                <SwiperSlide>
                    <div className="">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px]  flex-col flex md:flex-row-reverse lg:flex-row-reverse">
                                <div className="lg:ml-36">
                                    <img width="800" height="700" src="https://i.ibb.co/bvHkL8g/8.jpg" className=" rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Ocean View Suite</h1>
                                    <p>"Deluxe single room perfect for solo travelers, featuring a cozy bed."</p>
                                    <button className="btn text-white font-bold bg-blue-400">Visit Now</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px]  flex-col flex md:flex-row-reverse lg:flex-row-reverse">
                                <div className="lg:ml-36">
                                    <img width="800" height="700" src="https://i.ibb.co/tpnPHNS/9.jpg" className=" rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Executive Suite</h1>
                                    <p>"Spacious family suite with direct garden access, offering two bedrooms."</p>
                                    <button className="btn text-white font-bold bg-blue-400">Visit Now</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px]  flex-col flex md:flex-row-reverse lg:flex-row-reverse">
                                <div className="lg:ml-36">
                                    <img width="800" height="700" src="https://i.ibb.co/fSWwtkL/7.jpg" className=" rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Deluxe King Room</h1>
                                    <p>"Executive suite with a breathtaking city view, featuring a plush king-sized bed."</p>
                                    <button className="btn text-white font-bold bg-blue-400">Visit Now</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px]  flex-col flex md:flex-row-reverse lg:flex-row-reverse">
                                <div className="lg:ml-36">
                                    <img width="800" height="700" src="https://i.ibb.co/CVTTTrn/6.jpg" className=" rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Garden Terrace Room</h1>
                                    <p>"Luxury suite with stunning ocean views, elegantly furnished with a king-sized bed, private balcony. Includes complimentary breakfast and evening turndown service."</p>
                                    <button className="btn text-white font-bold bg-blue-400">Visit Now</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
            {/*  */}
            
        </div>
  )
}

export default Slider;