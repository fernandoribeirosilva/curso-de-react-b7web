import { useEffect, useState } from 'react';
import { axiosInstance as axios } from './config/axios';
import { Post } from './types/Post';

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/posts')
      const { data } = res;
      setLoading(false);
      setPosts(data);
    } catch (error: InstanceType<Error>) {
      const message = error.response.data.error;
      console.log('Error => ', error);
      setLoading(false);
      setError(message);
    }
  };


  return (
    <div className='p-5'>
      {loading &&
        <div className='font-bold'>Carregando...</div>
      }

      {!loading && posts.length > 0 &&
        <>
          <div className='mb-5 font-bold underline underline-offset-4'>
            Total de Posts: {posts.length}
          </div>

          <div>
            {posts.map((item) => (
              <div key={item.id} className="py-4">
                <h4 className="font-bold">{item.title}</h4>
                <small>#{item.id} - Usuário: {item.userId}</small>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </>
      }

      {!loading && posts.length === 0 &&
        <div>{error}</div>
      }
    </div>
  )
}

export default App

// https://api.b7web.com.br/cinema/