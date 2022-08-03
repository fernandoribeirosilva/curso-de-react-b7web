import style from './style.module.css';

export const Botao = () => {
   return (
      <div className={style.square}>
         <button className={style.botao}>Clique a aqui</button>
         <p className={style.legend}>legenda</p>
      </div>
   )
}