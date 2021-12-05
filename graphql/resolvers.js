import { getMovies, getById, addMovie } from "./db";

const resolvers = {
    Query: {
        movies: () => movie,
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score)
    }
};

export default resolvers;