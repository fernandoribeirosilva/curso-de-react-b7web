import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { Loading } from './components/Loading';
import { Message } from './components/Message/Message';
import { Post } from './components/Post';
import { axiosInstance as axios } from './config/axios';
import { Post as PostProps } from './types/Post';

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<PostProps[]>([]);

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
      console.log('Error => ', error);
      setLoading(false);
    }
  };


  return (
    <div className='p-5'>
      {loading && <Loading />}

      <Form />

      {!loading && posts.length > 0 &&
        <>
          <div className='mb-2 font-bold underline underline-offset-4'>
            Total de Posts: {posts.length}
          </div>

          <div>
            {posts.map((item) => (
              <Post key={item.id} {...item} />
            ))}
          </div>
        </>
      }

      {!loading && posts.length === 0 &&
        <Message message='Não tem post para mostra' />
      }
    </div>
  )
}

export default App

// https://api.b7web.com.br/cinema/