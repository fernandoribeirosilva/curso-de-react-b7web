import { ReactNode } from "react";

interface Props {
   url?: string;
   legend: string;
   alt?: string;
   children: ReactNode;
}

/* Fragment */
// export const Photo = (props: Props) => {
//    return (
//       <>/* Fragment */
//          <img src={props.url} alt={props.alt} />
//          <p>{props.legend}</p>
//       </>
//    );
// }

/* Children  */
export const Photo = (props: Props) => {
   return (
      <div>
         {props.children}
         <p>{props.legend}</p>
      </div>
   );
}