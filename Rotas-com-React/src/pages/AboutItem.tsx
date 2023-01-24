import { useParams } from "react-router-dom";

export function AboutItem() {
  const { slug } = useParams();

  return (
    <div>
      Página sobre {slug?.toUpperCase()} ({slug?.length} letras)
    </div>
  )
}