import { useState } from 'react'

function App() {

  return (
    <div className="bg-blue-300 p-5">
      <input
        type="text"
        className="outline-none border border-transparent border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-700"
        placeholder='Digite alguma coisa'
      />

      <button className="ml-2 p-3 bg-blue-400 rounded text-white font-bold transition background-color ease-linear duration-300 hover:bg-sky-700 hover:transition-all">Clique aqui</button>
    </div>
  )
}

export default App
