import Link from "next/link";
import type { Post } from "../../../types";
import { wordLimits } from "../../utils/common";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="card p-5 bg-base-100 shadow-lg border rounded-md">
      <div className="card-body">
        <Link href={`posts/${post.id}`} className="flex flex-col gap-1">
          <h2 className="card-title font-bold text-2xl truncate">
            {post.title}
          </h2>
        </Link>
        <p className="mb-3">{wordLimits(post.body, 30)}</p>
      </div>
    </div>
  );
}

export default PostCard;
