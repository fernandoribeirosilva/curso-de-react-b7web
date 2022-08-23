/* 
  quando eu quero trocar alguma informação de uma variável, incrementar ou mudar o nome
  eu uso o useState. 

  O Reducer tem o mesmo papel do useState, mas ele é mais complexo.

  1 parâmetro - Ele recebe no primeiro parâmetro uma função.
    Essa função recebe dois parâmetros sempre, no primeiro parâmetro o estado 
    atual do reducer. E no segundo é que ação que eu vou executar. ou seja esta função
    vai ser executada toda vez que eu precisar mudar o estado do reducer.

  2 parâmetro - são os valores iniciais do meu reducer.
*/

function App() {
  return (
    <div className="p-5">
      <p>Hello World</p>
    </div>
  );
}

export default App;
