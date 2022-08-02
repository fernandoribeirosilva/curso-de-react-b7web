import { useState } from "react";
import './style.css'

type Props = {
   data: {
      name: string;
      age: number;
   }
   showName: (name: string) => void;
}

export const Pessoa = ({
   data,
   showName
}: Props) => {

   let [name, setName] = useState('')

   const handleClick = () => {
      setName(data.name)
      showName(name)
   }

   return (
      <>
         <li onClick={handleClick}>{data.name} - {data.age} anos</li>
      </>
   )
}