import * as C from './AppStyle';

function App() {

  return (
    <C.Container bgColor='#0000FF'>
      <h1>Hello World</h1>
      <C.Botao bg='#00FF00'>Clique aqui</C.Botao>
      <C.Botao
        bg='#FF0000'
        marginLeft='10px'
        small
      >
        Clique aqui
      </C.Botao>
    </C.Container>
  )
}

export default App
