import React, {useState} from "react";
import PropTypes from "prop-types";
import {FaStar} from 'react-icons/fa'
import '../Star.css';

/**
 * @params rating number for rates
 * @todo ADD static identifier to change from changeble to static
 */
const Rate = ({ rating, review }) => {
    
    // Initialising the state value
    const [rate, setRate] = useState(rating)
    const [hover, setHover] = useState(null)

    if(rate === 0){
        setRate(null)
    }

    /**
     * Placing notes here:
     * 1. For onClick, the function is in the return itself because it is light
     * 2. We can turn it into a proper function if the application grows bigger
     *  @todo: Change the setRate function into a proper function
     */

    // We can capture the rate

    
    // Returning stars with rating
    return(
        <div>
            {[ ... Array(5)].map((star,i) =>{
                const ratingValue = i+1;
                return (
                    // Labels to group with input
                    <label>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingValue}
                            onClick={()=>setRate(ratingValue)} 
                        />
                        <FaStar 
                            className="star" 
                            size={15}
                            color={
                                ratingValue <= (rate || hover) ? '#ffc107': '#e4e5e9'}
                            onMouseEnter={()=>setHover(ratingValue)}
                            onMouseLeave={()=>setHover(null)}
                        />
                    </label>
                )
            })}
            {review !== null
            ?<span style={{fontSize: '1em',paddingLeft:'10px'}}>{rate}, {review}</span>
            :<span style={{fontSize: '1em',paddingLeft:'10px'}}>{rate}</span>}
            
        </div>
    )
        
};

// Initialised the Property Types
Rate.propTypes = {
  rating: PropTypes.number,
  review: PropTypes.string
};

export default Rate;