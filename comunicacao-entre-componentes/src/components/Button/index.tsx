
type Props = {
   text: string;
   clickFn: (txt: string) => void;
}

export const Button = ({
   text,
   clickFn
}: Props) => {

   const handleClick = () => {
      // passando informação para o componente pai
      clickFn('FRASE')
   }

   return (
      <button onClick={handleClick}>{text}</button>
   )
}