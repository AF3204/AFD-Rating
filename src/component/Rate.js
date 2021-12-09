import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rate = ({ rating }) => {
    return <div>{rating} star rating</div>;
};

Rate.propTypes = {
  rating: PropTypes.number,
};

export default Rate;