import { useEffect, useState } from "react";
import Api from "./api";
import { Form } from "./components/Form";
import { Loading } from "./components/Loading";
import { Message } from "./components/Message/Message";
import { PostItem } from "./components/Post";
import { Post } from "./types/Post";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      setLoading(true);
      const data = await Api.getAllPost();
      setLoading(false);
      setPosts(data);
    } catch (error: InstanceType<Error>) {
      console.log("Error => ", error);
      setLoading(false);
    }
  };

  const handleAddPost = async (title: string, body: string) => {
    const data = await Api.addNewPost(title, body, 1);

    if (data.id) {
      alert("Post criado com sucesso");
    } else {
      alert("Erro ao criar post");
    }
  };

  return (
    <div className="p-5">
      {loading && <Loading />}

      <Form onAdd={handleAddPost} />

      {!loading && posts.length > 0 && (
        <>
          <div className="mb-2 font-bold underline underline-offset-4">
            Total de Posts: {posts.length}
          </div>

          <div>
            {posts.map((item) => (
              <PostItem key={item.id} {...item} />
            ))}
          </div>
        </>
      )}

      {!loading && posts.length === 0 && (
        <Message message="Não tem post para mostra" />
      )}
    </div>
  );
}

export default App;

// https://api.b7web.com.br/cinema/
