import React, { useState } from 'react';

interface StarRatingProps {
    totalStars?: number;
    onRating?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5, onRating }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((_, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={ratingValue}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => {
                                setRating(ratingValue);
                                if (onRating) onRating(ratingValue);
                            }}
                        />
                        <span
                            className={`star ${ratingValue <= (hover || rating) ? "filled" : ""}`}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(rating)}
                        >&#9733;</span>
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
