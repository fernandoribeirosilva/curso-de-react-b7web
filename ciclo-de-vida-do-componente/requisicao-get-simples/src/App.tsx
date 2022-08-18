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
    loadMovies();
  }, []);

  // const loadMovies = () => {
  //   setLoading(true);
  //   fetch('https://api.b7web.com.br/cinema')
  //     .then(response => response.json())
  //     .then(data => {
  //       setMovies(data);
  //       setLoading(false);
  //     })
  //     .catch(e => {
  //       setLoading(false);
  //       setMovies([]);
  //       console.log(e);

  //     })
  // };

  const loadMovies = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://api.b7web.com.br/cinema')
      const data = await res.json();
      setLoading(false);
      setMovies(data);
    } catch (error) {
      setLoading(false);
      setMovies([]);
    }
  };

  return (
    <div className='p-5'>
      {loading &&
        <div className='font-bold'>Carregando...</div>
      }

      {!loading && movies.length > 0 &&
        <>
          <div className='mb-5 font-bold underline underline-offset-4'>
            Total de Filmes: {movies.length}
          </div>

          <div className="grid grid-cols-6 gap-8 ">
            {movies.map((movie, index) => (
              <div key={index} className="mx-auto">
                <img src={movie.avatar} alt="" className='w-52 block' />
                <span>{movie.titulo}</span>
              </div>
            ))}
          </div>
        </>
      }

      {!loading && movies.length === 0 &&
        <div>Tente mais tarde novamente</div>
      }
    </div>
  )
}

export default App

// https://api.b7web.com.br/cinema/