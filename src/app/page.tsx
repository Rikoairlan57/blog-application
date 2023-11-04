import Link from "next/link";
import { getPosts } from "@/api/get-posts.service";
import { ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import PostCard from "@/components/post/post-card";
import { Pagination } from "@/components/ui/pagination";

interface HomeProps {
  searchParams: Record<string, string>;
}

export default async function Home({ searchParams }: HomeProps) {
  const posts = await getPosts({
    page: searchParams.page ? Number(searchParams.page) : 1,
    perPage: searchParams.per_page ? Number(searchParams.per_page) : 30,
  });

  return (
    <>
      <section className="md:py-20 px-8 max-w-7xl mx-auto">
        <div className="container mx-auto grid grid-cols-1 items-start gap-y-20 gap-x-8 md:px-8 pt-10 pb-16  lg:grid-cols-2">
          {posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
        </div>
      </section>

      <Pagination
        getNextLink={(nextPage) => `/?page=${nextPage}`}
        searchParams={searchParams}
        totalPagination={1000}
      />
    </>
  );
}
