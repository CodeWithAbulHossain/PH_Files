import PropTypes from "prop-types";
import Features from "../Features/Features";

const PriceOption = ({ option }) => {
  const { name, features, price } = option;
  return (
    <div className="bg-red-400 rounded-2xl p-7">
      <div className="text-center mb-4">
        <h2>
          <span className="text-7xl">{price}</span>
          <span className="text-2xl">/mon</span>
        </h2>
        <h4 className="text-3xl mt-3">{name}</h4>
      </div>

      {features.map((feature, index) => (
        <Features key={index} feature={feature}></Features>
      ))}
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
