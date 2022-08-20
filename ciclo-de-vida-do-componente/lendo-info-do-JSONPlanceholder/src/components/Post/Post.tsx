import { Post as PostProps } from "../../types/Post"

export const Post = ({
   userId,
   id,
   title,
   body,
}: PostProps) => {
   return (
      <div className="py-4">
         <h4 className="font-bold">{title}</h4>
         <small>#{id} - Usuário: {userId}</small>
         <p>{body}</p>
      </div>
   )
}