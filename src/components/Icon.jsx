import PropTypes from "prop-types";

const Icon = ({ IconName }) => {
  return <IconName />;
};

Icon.propTypes = {
  IconName: PropTypes.elementType.isRequired,
};

export default Icon;
