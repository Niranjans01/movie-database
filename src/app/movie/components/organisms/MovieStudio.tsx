import Image from "next/image";
import { ISelectedMedia } from "../../interfaces";
import MediaItem from "../molecules/MediaItem";


interface MovieStudioProps {
    selectedMedia: ISelectedMedia;
    imageCount: number;
    videoCount: number;
    posterUrl: string;
}


const MovieStudio: React.FC<MovieStudioProps> = ({ selectedMedia, imageCount, videoCount, posterUrl }) => {

    return (
        <div className="grid grid-cols-4 gap-4 w-full h-[65vh] overflow-hidden" data-testid="movie-studio">
            <div className="col-span-1 h-full relative" data-testid="movie-poster">
                <Image src={posterUrl} alt={'test'} className='h-full' objectFit="cover" layout="fill" />
            </div>
            <div className="col-span-2 h-full relative">
                {
                    selectedMedia.type === 'image' ? (
                        <Image src={selectedMedia.contentUrl} alt={selectedMedia.title}
                            className="h-full"
                            objectFit="cover"
                            layout="fill"
                        />
                    ) : (
                        <iframe
                            data-testid="video-player"
                            className="w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${selectedMedia.contentUrl}`}
                            title="YouTube video player"
                        ></iframe>
                    )
                }
            </div>
            <div className="col-span-1">
                <div className="grid grid-rows-2 h-full gap-2">
                    <MediaItem
                        type={'image'}
                        count={imageCount}
                    />
                    <MediaItem
                        type={'video'}
                        count={videoCount}
                    />
                </div>
            </div>
        </div>
    );
}

export default MovieStudio;