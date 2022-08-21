import { ChangeEvent, useState } from "react";

type Props = {
  onAdd: (title: string, body: string) => void;
};

export const Form = ({ onAdd }: Props) => {
  const [addTitleText, setAddTitleText] = useState("");
  const [addBodyText, setAddBodyText] = useState("");

  const handleAddTitleText = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value);
  };

  const handleAddBodyText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value);
  };

  const handleClick = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!addTitleText && !addBodyText) {
      alert("Preencha todos os campos");
      return;
    }
    onAdd(addTitleText, addBodyText);
    setAddBodyText("");
    setAddTitleText("");
  };

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
          <button type="submit" className="block border border-zinc-300 p-1">
            Adicionar
          </button>
        </fieldset>
      </form>
    </>
  );
};
