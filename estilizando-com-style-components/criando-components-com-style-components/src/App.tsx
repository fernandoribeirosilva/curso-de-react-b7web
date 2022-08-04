import * as C from './AppStyle';

function App() {

  return (
    <C.Container bgColor='#0000FF'>
      <h1>Hello World</h1>

      <span className='username'>Olá Fernando</span>

      <C.Botao bg='#00FF00'>
        Clique aqui
      </C.Botao>
      <C.Botao bg='#FF0000' small>
        Clique aqui
      </C.Botao>
    </C.Container>
  )
}

export default App
