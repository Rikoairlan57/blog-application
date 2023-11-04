import { Comment } from "@/components/post/comment";
import { getPostComments } from "@/api/get-post-comments";
import { getPost } from "@/api/get-post.service";

interface PostProps {
  params: { postId: string };
}

export default async function Post({ params: { postId } }: PostProps) {
  const post = await getPost({ postId });
  const comments = await getPostComments({ postId });

  return (
    <section>
      <h1 className="text-2xl font-medium mb-3">{post.title}</h1>
      <p>{post.body}</p>

      <h2 className="mt-8 text-lg font-semibold">
        Comments ({comments.length})
      </h2>

      <ul className="mt-4 space-y-3">
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
