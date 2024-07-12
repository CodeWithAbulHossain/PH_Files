import persone from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero h-[600px]  mt-20 mb-28">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src={persone}
            className="w-5/6 h-[450px]  rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            className="w-1/2 absolute right-5 -bottom-14 rounded-lg border-8 shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 pl-6">
          <h3 className="text-2xl font-bold text-red-600 mb-5">About Us</h3>
          <h1 className="text-5xl font-bold w-2/3 mb-8">
            We are qualified & of experience in this field
          </h1>
          <p className="mb-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="mb-12">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-error text-[17px] text-white font-bold mb-5">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
