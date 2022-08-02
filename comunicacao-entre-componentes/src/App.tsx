import { Button } from './components/Button';


function App() {
  let textoDoBotao = 'Clique aqui';

  // função que será passada para o componente Button, mais ela vai ser executada no App
  const click = (txt: string) => {
    alert('Frase do App: ' + txt)
  }

  return (
    <div>
      <Button clickFn={click} text={textoDoBotao} />
    </div>
  )
}

export default App
