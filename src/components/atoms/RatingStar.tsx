import IconText from "@/app/movie/components/atoms/IconText";
import { useRating } from "@/context/RatingContext";
import React from "react";
import StarIcon from "../icons/StarIcon";
import TrendIcon from "../icons/TrendIcon";
import Text from "./Text";

const DetailGrid: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => <div className="flex flex-col justify-center">
    <Text variant="body">{title}</Text>
    <div className="flex flex-row items-center justify-center gap-2">
        {children}
    </div>
</div>





const RatingStar: React.FC<{ handleRate: () => void, ratings: { rating: number; count: number; } }> = ({ handleRate }) => {
    const { ratingValue } = useRating();

    return (
        <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row items-center space-x-1">
                    <StarIcon filled={true} size={20} />
                </div>
                <div className="flex flex-col justify-center">
                    <Text variant="body">{ratingValue.rating || '0'}/5</Text>
                    <Text variant="subtitle">{ratingValue?.count || 'No Ratings'}</Text>
                </div>
            </div>
            <DetailGrid title="YOUR RATING">
                <IconText
                    handleClick={handleRate}
                    icon={<StarIcon filled={false} size={20} />} text="Rate" textStyles="text-blue-500" customClass="cursor-pointer" />
            </DetailGrid>
            <DetailGrid title="POPULARITY">
                <IconText icon={<TrendIcon size={20} color="#EF4444" />} text="108" />
            </DetailGrid>
        </div>
    );
};

export default RatingStar;
