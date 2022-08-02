import { Pessoa } from "./components/Pessoa"


function App() {

  const list = [
    { name: 'Fernando', age: 32 },
    { name: 'João', age: 25 },
    { name: 'Maria', age: 27 },
    { name: 'Pedro', age: 28 },
    { name: 'José', age: 30 },
  ]

  const show = (name: string) => {
    alert('Ola: ' + name)
  }

  return (
    <div >
      <h2>lista de presença</h2>
      <ul>
        {list.map((item, index) => (
          <Pessoa
            key={index}
            data={item}
            showName={show}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
