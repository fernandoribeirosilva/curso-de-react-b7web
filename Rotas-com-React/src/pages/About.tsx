import { Link, useSearchParams } from "react-router-dom";

export function About() {
  const [searchParams, setSearchParams] = useSearchParams();

  function setOrder(order: 'asc' | 'desc') {
    searchParams.set('order', order);
    setSearchParams(searchParams);
  }

  return (
    <div>
      Filtro: {searchParams.get('filter')}<br />
      Ordem: {searchParams.get('order')}
      <hr />
      <button onClick={() => setOrder('asc')}>Asc</button>
      <button onClick={() => setOrder('desc')}>Desc</button>
      <hr />
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