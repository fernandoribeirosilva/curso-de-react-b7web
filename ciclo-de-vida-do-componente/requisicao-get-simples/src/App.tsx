import { useEffect, useState } from 'react'
import { Movie } from './types/Movie';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch('https://api.b7web.com.br/cinema/')
  //     .then(response => response.json())
  //     .then(data => setMovies(data));
  // }, []);

  useEffect(() => {
    if (movies) setLoading(!loading);
  }, [movies]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const res = await fetch('https://api.b7web.com.br/cinema/')
    const data = await res.json();
    setMovies(data);
  };

  return (
    <div className='p-5'>
      {loading
        ?
        <div className='font-bold'>Carregando...</div>
        :
        <>
          <div className='mb-5 font-bold underline underline-offset-4'>
            Total de Filmes: {movies.length}
          </div>

          <div className="grid grid-cols-6 gap-8 ">
            {movies.map((movie, index) => (
              <div key={index}>
                <img src={movie.avatar} alt="" className='w-52 block' />
                <span>{movie.titulo}</span>
              </div>
            ))}
          </div>
        </>
      }
    </div>
  )
}

export default App

// https://api.b7web.com.br/cinema/