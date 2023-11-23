import Image from "next/image";
import { IPhoto, IVideo } from "../../interfaces";

interface IVideoCard {
  movie: IVideo,
  handleClick?: (id: string) => void
}

const VideoCard: React.FC<IVideoCard> = ({ movie, handleClick = () => { } }) => {
  return (
    <div className={`h-48 relative w-full cursor-pointer`}>
      <iframe
        className="w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${movie.thumbnailUrl}`}
        title="YouTube video player"
      ></iframe>
      <div
        onClick={() => handleClick(movie.thumbnailUrl)}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'pointer' }}></div>
    </div>
  )
}

const ImageCard: React.FC<{ image: IPhoto, handleClick: (id: string) => void }> = ({ image, handleClick }) => {
  return (
    <div className={`h-48 relative w-full cursor-pointer`} onClick={() => handleClick(image.imageUrl)}>
      <Image src={image.imageUrl} alt="Movie scene" layout="fill" objectFit="cover" className="rounded-lg" />
    </div>
  )
}

export { VideoCard, ImageCard };
