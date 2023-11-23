import ImageIcon from "@/components/icons/ImageIcon";
import IconText from "../atoms/IconText";

const MediaItem = ({ count, type }: {
    count: number;
    type: 'image' | 'video';
}) => {
    return (
        <div className="cursor-pointer row-span-1 border-2 h-full flex items-center justify-center" >
            {
                type === 'image' ? (
                    <IconText icon={<ImageIcon />} text={`${count} Images`} />
                ) : (
                    <IconText icon={<ImageIcon />} text={`${count} Videos`} />
                )
            }
        </div>
    );
};

export default MediaItem;