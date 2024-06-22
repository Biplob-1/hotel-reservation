

const About = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 mt-4">Discover more about our hotel booking services and our team.</p>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is to provide travelers with the best and most convenient way to book hotels. We offer a wide range of hotel options to meet the needs of all our customers, ensuring a comfortable and enjoyable stay every time.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-12">
          <div className="w-full md:w-2/3 lg:w-1/2 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h2>
              <p className="text-gray-600">
                We value integrity, customer satisfaction, and continuous improvement. Our team is dedicated to ensuring that every booking experience is seamless and every stay is memorable. We work tirelessly to provide excellent customer service and to offer the best deals on hotels worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-12">
          <div className="w-full md:w-2/3 lg:w-1/2 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
              <p className="text-gray-600">
                Our team is composed of dedicated professionals who are passionate about travel and hospitality. From our customer service representatives to our web developers, every member of our team works with one goal in mind: to provide you with the best hotel booking experience possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
