'use client';
import Layout from '@/components/Layout';
import { RatingProvider } from '@/context/RatingContext';
import MoviePage from './components/MoviePage';

const MovieSingle: React.FC = () => {


    return (
        <Layout>
            <RatingProvider>
                <MoviePage/>
            </RatingProvider>
        </Layout>
    );
};
export default MovieSingle;