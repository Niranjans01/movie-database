'use client';
import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import CustomModal from '@/components/CustomModal';
import Layout from '@/components/Layout';
import { handleError } from '@/components/utils/handleError';
import { RatingProvider, useRating } from '@/context/RatingContext';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { IMovieDetail, ISelectedMedia } from '../interfaces';
import { ImageCard, VideoCard } from './molecules/MovieCard';
import MovieHeader from './molecules/MovieHeader';
import MovieMeta from './molecules/MovieMeta';
import StarRating from './molecules/StarRating';
import CarouselGallery from './organisms/CarouselGallery';
import MovieStudio from './organisms/MovieStudio';

const MoviePage: React.FC = () => {
    const router = useSearchParams();
    const id = router.get('id');
    const { updateRating, setMovieDetails, movieDetails } = useRating();
    const [selectedMedia, setSelectedMedia] = useState<ISelectedMedia | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [openRatingModal, setOpenRatingModal] = useState<boolean>(false);
    const [rating, setRating] = useState<number>(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let isMounted = true;
        async function fetchMovieDetails() {
            if (!id) return;
            setLoading(true);
            try {
                const response = await fetch(`/api/movie?id=${id}`);
                const data = await response.json();
                if (isMounted) {
                    setMovieDetails(data?.movie);
                    setSelectedMedia({
                        type: 'video',
                        contentUrl: data?.movie?.videos[0].thumbnailUrl,
                        title: data?.movie?.title,
                        id: data?.movie?.id
                    });
                }
            } catch (error) {
                handleError(error, setError)
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        fetchMovieDetails();
        return () => { isMounted = false };
    }, [id]);

    if (loading) {
        return <Layout><div>Loading...</div></Layout>;
    }

    if (error) {
        return <Layout><div>Error: {error}</div></Layout>;
    }

    if (!movieDetails) {
        return <Layout><div>No movie details found</div></Layout>;
    }



    const handleClick = (id: string) => {
        const selectedVideo = movieDetails.videos.find((v) => v.thumbnailUrl === id);
        const selectedImage = movieDetails.images.find((i) => i.imageUrl === id);
        if (selectedVideo) {
            setSelectedMedia({
                type: 'video',
                contentUrl: selectedVideo.thumbnailUrl,
                title: selectedVideo.title,
                id: selectedVideo.id
            });
        }
        if (selectedImage) {
            setSelectedMedia({
                type: 'image',
                contentUrl: selectedImage.imageUrl,
                title: selectedImage.title,
                id: selectedImage.id
            });
        }
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleRateMovie = async () => {
        // PUT /api/movie 
        setOpenRatingModal(true);
    }

    const submitRating = async () => {
        if (!rating) {
            alert('Please select a rating');
            return;
        };
        const response = await fetch(`/api/movie?id=${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                userId: '1',
                rating
            })
        });

        const data = await response.json();
        console.log(data, 'data');
        if (data?.status === 200) {
            // setMovieDetails(data?.movie);
            updateRating(data?.movie);
            setOpenRatingModal(false);
        }
    }


    return (<>
        <div ref={scrollRef}
            className="flex flex-col gap-4 bg-gray-800 px-4 sm:px-6 lg:px-8 pb-10">
            <MovieHeader handleRating={handleRateMovie} details={movieDetails} />
            {selectedMedia && <MovieStudio posterUrl={movieDetails.posterUrl} imageCount={movieDetails.images.length} videoCount={movieDetails.videos.length} selectedMedia={selectedMedia} />}
            <MovieMeta director={movieDetails.director} writers={movieDetails.writers} genres={movieDetails.genre} />
        </div>
        <div className="flex flex-col gap-4 px-4 sm:px-6 lg:px-8 py-10">
            <CarouselGallery
                type="video" >
                {movieDetails.videos.map((vSrc) =>
                    <VideoCard key={vSrc.thumbnailUrl} movie={vSrc} handleClick={handleClick} />
                )}
            </CarouselGallery>
            <CarouselGallery
                type="image">
                {movieDetails.images.map((imgSrc) =>
                    <ImageCard key={imgSrc.imageUrl} image={imgSrc} handleClick={handleClick} />
                )}
            </CarouselGallery>
        </div>
        {
            openRatingModal && (
                <CustomModal
                    title="Rate Movie"
                    setIsOpen={setOpenRatingModal}
                    isOpen={openRatingModal}
                >
                    <Text variant='body' customStyle='text-gray-500'>Movie : {movieDetails.title}</Text>
                    <StarRating onRating={(rating) => setRating(rating)} />
                    <Button label='Submit Rating' onClick={submitRating} />
                </CustomModal>
            )
        }
    </>
    );
};
export default MoviePage;