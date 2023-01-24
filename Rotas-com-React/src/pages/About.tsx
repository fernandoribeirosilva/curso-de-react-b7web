import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      Página Sobre:
      <ul>
        <li>
          <Link to="/sobre/fernando">Fernando</Link>
        </li>
        <li>
          <Link to="/sobre/pedro">Pedro</Link>
        </li>
      </ul>
    </div>
  )
}