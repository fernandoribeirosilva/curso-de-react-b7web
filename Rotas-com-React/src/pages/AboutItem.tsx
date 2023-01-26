import { useNavigate, useParams } from "react-router-dom";

export function AboutItem() {
  const { slug } = useParams();
  const navigate = useNavigate();

  function handleBackButton() {
    navigate(-1);
  }

  function handleHomeButton() {
    const slug = 'ciclano';
    navigate(`/sobre/${slug}`);
  }

  return (
    <div>
      Página sobre {slug?.toUpperCase()} ({slug?.length} letras)
      <hr />
      <button
        onClick={handleBackButton}
      >
        Voltar
      </button>

      <button onClick={handleHomeButton}>
        Home
      </button>
    </div>
  )
}