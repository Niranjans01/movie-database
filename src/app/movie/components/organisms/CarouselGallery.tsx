import Text from '@/components/atoms/Text';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IPhoto, IVideo } from '../../interfaces';
import { ImageCard, VideoCard } from '../molecules/MovieCard';


interface ICarouselGallery {
  children: React.ReactNode, 
  type: 'image' | 'video'
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const CarouselGallery: React.FC<ICarouselGallery> = ({ children, type }) => {
  return (
    <div className="flex flex-col gap-4">
      <Text variant="title" customStyle='text-gray-800'>{type==='image' ? 'Images' : 'Videos'}</Text>
      <Carousel responsive={responsive} itemClass={type === 'image' ? 'item-image' : 'item-video'}>
        {children}
      </Carousel>
    </div>
  );
};




export default CarouselGallery;
