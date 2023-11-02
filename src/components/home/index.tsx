"use client";
import { wordLimits } from "@/utils/common";
import { PUBLIC_API } from "@/utils/config";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function BlogCard() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get(PUBLIC_API + "/public/v2/posts").then((res) => {
      setPosts(res.data);
      setTotal(res.data.length);
    });
  }, []);

  const indexOfLastPage = page * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);
  return (
    <section className="md:py-20 px-8 max-w-7xl mx-auto">
      <div className="container mx-auto grid grid-cols-1 items-start gap-y-20 gap-x-8 md:px-8 pt-10 pb-16  lg:grid-cols-2">
        {currentPosts.map((post: any) => (
          <div
            className="card p-5 bg-base-100 shadow-lg border rounded-md"
            key={post.id}
          >
            <div className="card-body">
              <Link href={`/${post.id}`}>
                <h2 className="card-title font-bold text-2xl truncate">
                  {post.title}
                </h2>
              </Link>
              <p className=" mb-3">{wordLimits(post.body, 30)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogCard;
