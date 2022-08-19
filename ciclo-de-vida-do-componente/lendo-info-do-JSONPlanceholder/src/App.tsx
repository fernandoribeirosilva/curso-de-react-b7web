import { useEffect, useState } from 'react';
import { Post } from './types/Post';

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json();
      setLoading(false);
      setPosts(data);
    } catch (error) {
      setLoading(false);
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
            {posts.map((item, index) => (
              <div key={index} className="py-4">
                <h4 className="font-bold">{item.title}</h4>
                <small>#{item.id} - Usuário: {item.userId}</small>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </>
      }

      {!loading && posts.length === 0 &&
        <div>Não há posts para exibir.</div>
      }
    </div>
  )
}

export default App

// https://api.b7web.com.br/cinema/