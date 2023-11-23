import { IMovieDetail } from "@/app/movie/interfaces";
import { NextRequest, NextResponse } from "next/server";



const movieDetails: IMovieDetail[] = [{
    // Example data structure based on our interface
    id: '1',
    title: "Avengers: Endgame",
    genre: ["Action", "Drama"],
    makeYear: '2021',
    duration: '2h 30m',
    ageRating: 'R',
    director: ["Jane Doe"],
    writers: ["John Smith", "Alice Johnson"],
    stars: ["Actor 1", "Actor 2"],
    rating: [{ userId: "user123", movieId: '1', rating: 5 },
    { userId: "user23", movieId: '1', rating: 3 },
    { userId: "user3", movieId: '1', rating: 4 }],
    posterUrl: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg",
    images: [{ id: "img1", title: "Image 1", imageUrl: "https://dummyimage.com/16:9x1080/" }],
    videos: [{ id: "vid1", title: "Trailer 1", thumbnailUrl: "sw9vXWydbtE" }, { id: "vid2", title: "Trailer 2", thumbnailUrl: "w4BxveOP9Y0" }, { id: "vid3", title: "Trailer 3", thumbnailUrl: "leZABQZcyh0" }, { id: "vid4", title: "Trailer 4", thumbnailUrl: "6ZfuNTqbHE8" }],
}, {
    id: '2',
    title: "Sample Movie 2",
    genre: ["Action", "Drama"],
    makeYear: '2021',
    duration: '2h 30m',
    ageRating: 'PG',
    director: ["Jane Doe"],
    writers: ["John Smith", "Alice Johnson"],
    stars: ["Actor 1", "Actor 2"],
    rating: [{ userId: "user123", movieId: '2', rating: 5 }],
    posterUrl: "https://artofthemovies.co.uk/cdn/shop/products/IMG_1306_1024x1024@2x.jpg?v=1677604566",
    images: [{ id: "img1", title: "Image 1", imageUrl: "https://dummyimage.com/16:9x1080/" },
    { id: "img2", title: "Image 2", imageUrl: "https://dummyimage.com/16:9x1080/" },
    { id: "img3", title: "Image 3", imageUrl: "https://dummyimage.com/16:9x1080/" },
    { id: "img4", title: "Image 4", imageUrl: "https://dummyimage.com/16:9x1080/" },
    { id: "img5", title: "Image 5", imageUrl: "https://dummyimage.com/16:9x1080/" },
    ],
    videos: [{ id: "vid1", title: "Trailer 1", thumbnailUrl: "w4BxveOP9Y0" }],
}, {
    id: '3',
    title: "Sample Movie 3",
    genre: ["Action", "Drama"],
    makeYear: '2021',
    duration: '2h 30m',
    ageRating: 'PG-13',
    director: ["Jane Doe"],
    writers: ["John Smith", "Alice Johnson"],
    stars: ["Actor 1", "Actor 2"],
    rating: [{ userId: "user123", movieId: '3', rating: 5 }],
    posterUrl: "https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-ron-poster.jpg",
    images: [{ id: "img1", title: "Image 1", imageUrl: "https://dummyimage.com/16:9x1080/" }],
    videos: [{ id: "vid1", title: "Trailer 1", thumbnailUrl: "leZABQZcyh0" }],
}];

function getMovieById(movieId: string): IMovieDetail | undefined {
    const movie = movieDetails.find(m => m.id === movieId);

    let ratingValue;
    let response;
    if (movie) {
        ratingValue = movie.rating.length ? movie.rating.reduce((acc, curr) => acc + curr.rating, 0) / movie.rating.length : 0;
        response = { ...movie, ratingValue }
    }
    return response || undefined;
}

export async function GET(request: NextRequest) {
    const id = new URL(request.url).searchParams.get("id");

    if (id) {
        const movie = getMovieById(id);

        return movie ? NextResponse.json({ movie, status: 200 }) : NextResponse.json({ status: 404 });
    }

    return NextResponse.json({ movieDetails, status: 200 });
}

export async function PUT(request: NextRequest) {
    const id = new URL(request.url).searchParams.get("id");
    if (!id) {
        return NextResponse.json({ status: 400, message: "Invalid request" });
    }

    let body;
    try {
        body = await request.json();
    } catch (error) {
        return NextResponse.json({ status: 400, message: "Invalid JSON body" });
    }

    const { userId, rating } = body;
    if (!userId || typeof rating !== 'number') {
        return NextResponse.json({ status: 400, message: "Invalid request data" });
    }

    const movie = getMovieById(id);
    if (movie) {
        const ratingIndex = movie.rating.findIndex(r => r.userId === userId);
        if (ratingIndex !== -1) {
            movie.rating[ratingIndex].rating = rating;
        } else {
            movie.rating.push({ userId, movieId: id, rating });
        }

        return NextResponse.json({ status: 200, movie });
    }

    return NextResponse.json({ status: 404, message: "Movie not found" });
}