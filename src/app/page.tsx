'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { VideoCard } from './movie/components/molecules/MovieCard';
import { IMovieDetail } from './movie/interfaces';

export default function Home() {

  const [movies, setMovies] = useState<IMovieDetail[]>([]);
  const router = useRouter()

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(`/api/movie`);
      const data = await response.json();
      if (data?.status === 200) {
        setMovies(data?.movieDetails || []);
      }
    }

    fetchMovies()
  }, []);

  if (movies?.length < 0) return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Loading...</h1>
    </main>
  )

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1 className="text-4xl font-bold">Welcome to the Movie App</h1>
      <div className="flex gap-4">
        {movies?.map(movie => (
          <Link href={`/movie?id=${movie.id}`} key={movie.id} data-testid="movie-item">
            <VideoCard
              movie={movie.videos[0]}
            />
          </Link>
        ))}
      </div>
    </main>
  )
}
