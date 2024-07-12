import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import man from "../assets/man.jpg";
import { FaPinterestSquare } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
const Contacts = () => {
  return (
    <div>
      <div>
        <Helmet>
          {" "}
          <title>ResiCoop | Contacts</title>{" "}
        </Helmet>
        <div className="flex flex-col md:flex-row justify-around mt-10 gap-8">
          <div>
            <h2 className="text-black text-4xl font-bold">Have a Questions?</h2>
            <p className="text-black text-xl">We Can Help You</p>
            <div>
              <h2 className="mt-4">
                <span className="text-xl font-medium">Customer Support:</span>{" "}
                For any inquiries or assistance, please contact our customer
                support team at{" "}
                <span className="text-blue-700">
                  support@residentialwebsite.com
                </span>{" "}
                or call us at{" "}
                <span className="font-semibold">+1 (800) 123-4567.</span>
              </h2>
            </div>
            <div>
              <h2 className="mt-4">
                <span className="text-xl font-medium">
                  Sales or Rent Enquiries:
                </span>{" "}
                Interested in our residential properties? Contact our sales team
                at{" "}
                <span className="text-blue-700">
                  sales@residentialwebsite.com
                </span>{" "}
                or call us at{" "}
                <span className="font-semibold">+1 (800) 987-6543.</span>
              </h2>
            </div>
            <div>
              <h2 className="mt-4">
                <span className="text-xl font-medium">General Inquiries:</span>{" "}
                Have any general questions? Drop us an email at
                <span className="text-blue-700">
                  info@residentialwebsite.com.
                </span>{" "}
              </h2>
            </div>
            <div>
              <h2 className="mt-4">
                <span className="text-xl font-medium">
                  Feedback and Suggestions:
                </span>{" "}
                We value your feedback! Send us your suggestions or comments att{" "}
                <span className="text-blue-700">
                  feedback@residentialwebsite.com.
                </span>{" "}
              </h2>
            </div>
            <div className="flex flex-row gap-3 mt-6">
              <FaFacebookF></FaFacebookF>
              <FaInstagram></FaInstagram>
              <FaPinterestSquare></FaPinterestSquare>
              <FaYoutube></FaYoutube>
            </div>
          </div>
          <div>
            <img className="w-96 h-96 rounded-xl" src={man} alt="" />
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contacts;
