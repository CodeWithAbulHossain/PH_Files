import PropTypes from "prop-types";
const Features = ({ feature }) => {
  return (
    <div>
      <h1>{feature}</h1>
    </div>
  );
};

Features.propTypes = {
  option: PropTypes.string,
};

export default Features;
