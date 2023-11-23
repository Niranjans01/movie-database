'use client';
import RatingStar from "@/components/atoms/RatingStar";
import Text from "@/components/atoms/Text";
import { IMovieDetail } from "../../interfaces";

type MovieHeaderProps = {
  details: IMovieDetail;
  handleRating: () => void;
};

const MovieHeader: React.FC<MovieHeaderProps> = ({ details, handleRating }) => {
  // const ratingValue = details.rating.reduce((acc, curr) => acc + curr.rating, 0) / details.rating.length;

  return (
    <div className="flex flex-row justify-center h-20">
      <div className="flex flex-col justify-center" data-testid="movie-meta">
        <Text variant="title">{details.title}</Text>
        <div className="flex flex-row gap-4">
          <Text variant="body">{details.makeYear}</Text>
          <Text variant="body">{details.ageRating}</Text>
          <Text variant="body">{details.duration}</Text>
        </div>
      </div>
      <div className="flex flex-row ml-auto space-x-1 justify-center" data-testid="movie-rating">
        <RatingStar ratings={{
          rating: details.ratingValue || 0,
          count: details.rating.length
        }}
          handleRate={handleRating} />
      </div>
    </div>
  );
};

export default MovieHeader;
