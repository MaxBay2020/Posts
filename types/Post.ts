import Common from "./Common";
import Author from "./Author";
import Comment from "./Comment";

type Post = Common & {
    title: string,
    description: string,
    authors: Author[],
    comments: Comment[]
}

export default Post
