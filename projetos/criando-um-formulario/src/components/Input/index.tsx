import React from "react";

type Props = {
   type: string;
   value: string;
   label: string;
   change: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props) => {
   return (
      <div>
         <label>{props.label}</label>
         <input
            type={props.type}
            value={props.value}
            onChange={props.change}
         />
      </div>
   )
}