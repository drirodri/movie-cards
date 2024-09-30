export type movieProps = {
  movies: {
    title: string;
    subtitle: string;
    storyline: string;
    rating: number;
    imagePath: string;
  }[];
};

export type singleMovieProps = {
  movie: {
    title: string;
    subtitle: string;
    storyline: string;
    rating: number;
    imagePath: string;
  };
};
