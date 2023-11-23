interface IMovieDetail {
    id: string;
    title: string;
    makeYear: string;
    duration: string;
    ageRating: string;
    genre: string[];
    director: string[];
    writers: string[];
    stars: string[];
    rating: IRating[];
    posterUrl: string;
    images: IPhoto[];
    videos: IVideo[];
    ratingValue?: number;
}

interface ISelectedMedia {
    id: string;
    title: string;
    contentUrl: string;
    type: string;
}

interface IRating {
    userId: string;
    movieId: string;
    rating: number;
}

interface IVideo {
    id: string;
    title: string;
    thumbnailUrl: string;
}

interface IPhoto {
    id: string;
    title: string;
    imageUrl: string;
}


export type { IMovieDetail, IRating, IVideo, IPhoto, ISelectedMedia };