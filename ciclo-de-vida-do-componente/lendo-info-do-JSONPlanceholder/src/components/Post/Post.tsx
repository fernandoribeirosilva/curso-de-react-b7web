import { Post } from "../../types/Post"

export const PostItem = ({
   userId,
   id,
   title,
   body,
}: Post) => {
   return (
      <div className="py-4">
         <h4 className="font-bold">{title}</h4>
         <small>#{id} - Usuário: {userId}</small>
         <p>{body}</p>
      </div>
   )
}