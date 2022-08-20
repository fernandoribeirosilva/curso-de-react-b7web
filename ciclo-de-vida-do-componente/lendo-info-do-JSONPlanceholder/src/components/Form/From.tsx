import { ChangeEvent, FormEvent, useState } from "react";
import { axiosInstance as axios } from "../../config/axios";

export const Form = () => {
   const [addTitleText, setAddTitleText] = useState('');
   const [addBodyText, setAddBodyText] = useState('');

   const handleAddTitleText = (e: ChangeEvent<HTMLInputElement>) => {
      setAddTitleText(e.target.value);
   }
   const handleAddBodyText = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setAddBodyText(e.target.value);
   }
   const handleClick = async () => {
      if (!addTitleText && !addBodyText) {
         alert('Preencha todos os campos');
         return;
      }

      const res = await axios.post('/posts',
         {
            title: addTitleText,
            body: addBodyText,
            userId: 1
         },
         { headers: { 'Content-Type': 'application/json' } }
      );

      const { data } = res;
      if (data.id) {
         alert('Post criado com sucesso');
         setAddTitleText('');
         setAddBodyText('');
      } else {
         alert('Erro ao criar post');
      }
   }

   return (
      <>
         <form action="#" onSubmit={handleClick}>
            <fieldset className="border-2 border-gray-300 mb-3 p-3">
               <legend>Adicionar Novo Post</legend>
               <input
                  type="text"
                  value={addTitleText}
                  className="block border border-zinc-300 p-1"
                  onChange={handleAddTitleText}
               />
               <textarea
                  value={addBodyText}
                  className="block border border-zinc-300 resize-none p-1"
                  onChange={handleAddBodyText}
               ></textarea>
               <button
                  type="submit"
                  className="block border border-zinc-300 p-1"
               >Adicionar</button>
            </fieldset>
         </form>
      </>
   )
}