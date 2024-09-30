import Header from "./components/Header";
import MovieList from "./components/MovieList";
import movies from "./data";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <MovieList movies={movies} />
    </>
  );
}

export default App;
