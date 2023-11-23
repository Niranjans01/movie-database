
import { IMovieDetail, IRating } from '@/app/movie/interfaces';
import React, { createContext, useContext, useEffect, useState } from 'react';


interface RatingContextType {
    movieDetails: IMovieDetail | null;
    setMovieDetails: React.Dispatch<React.SetStateAction<IMovieDetail | null>>;
    updateRating: (movieDeta:IMovieDetail) => void;
    ratingValue: {
        rating: number;
        count: number;
    };
}


export const RatingContext = createContext<RatingContextType>({
    movieDetails: null,
    setMovieDetails: () => { },
    updateRating: (moviewDeta:IMovieDetail) => { },
    ratingValue: {
        rating: 0,
        count: 0
    }
});

export const RatingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [movieDetails, setMovieDetails] = useState<IMovieDetail | null>(null);
    const [ratingValue, setRatingValue] = useState<{
        rating: number;
        count: number;
    }>({
        rating: 0,
        count: 0
    });


    const updateRating = (movieDeta:IMovieDetail) => {
        // @ts-ignore
        const newRatingValue = movieDeta.rating.reduce((acc, curr) => acc + curr.rating, 0) / movieDeta.rating.length;
        if (movieDeta) {
            setRatingValue({
                rating: newRatingValue,
                count: movieDeta.rating.length
            });
        }
    };

    useEffect(() => {
        if (movieDetails) {
            console.log('RENDERED', 'movieDetails');
            updateRating(movieDetails);
        }
    }, [movieDetails]);

    return (
        <RatingContext.Provider value={{ ratingValue, updateRating, setMovieDetails, movieDetails }}>
            {children}
        </RatingContext.Provider>
    );
};


export const useRating = () => {
    const context = useContext(RatingContext);
    if (!context) {
        throw new Error('useRating must be used within a RatingProvider');
    }
    return context;
};