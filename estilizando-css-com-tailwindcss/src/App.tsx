import { useState } from 'react'

function App() {

  return (
    <div className="flex flex-col w-ful bg-blue-900 text-white p-4 font-bold text-2xl text-center  md:flex-row md:items-center md:justify-between lg:text-black">
      Texto qualquer aqui

      <button className="bg-green-300 text-black p-2 rounded-xl ml-2 mt-3 transition duration-300 hover:transition-all hover:bg-green-400 hover:cursor-pointer md:ml-3 md:mt-0 sx:w-2/4 sx:mx-auto sm:w-full md:w-1/3 md:mx-0">Clique aqui</button>
    </div>
  )
}

export default App
