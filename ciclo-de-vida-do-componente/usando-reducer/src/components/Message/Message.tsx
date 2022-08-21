import { Message as MessageProps } from "../../types/Message"


export const Message = ({ message }: MessageProps) => {
   return (
      <div>{message}</div>
   )
}