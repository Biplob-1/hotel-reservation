
const NewsletterSignup = () => {

  return (
    <div className="bg-cover bg-center" style={{backgroundImage: "url('https://i.ibb.co/4ZdQMXC/2.jpg')"}}>
      <div className="bg-gray-900 bg-opacity-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Subscribe To Stay Informed</h2>
          <p className="mb-4 text-center">Subscribe to our newsletter for updates, deals, and exclusive offers.</p>
          <form  className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
