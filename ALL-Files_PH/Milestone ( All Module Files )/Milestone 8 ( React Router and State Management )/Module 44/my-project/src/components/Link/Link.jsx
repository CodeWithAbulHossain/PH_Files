import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <li className="mr-8 hover:bg-amber-200 text-black px-2 rounded-lg">
      <a href={`route.path`}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
