import Detail from "@/components/home/detail";
import { Meta } from "@/components/meta";
import { getFilterById, getFindById } from "@/utils/common";
import { PUBLIC_API } from "@/utils/config";
import axios from "axios";
import { CustomNextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DefaultLayout } from "./layout";

const Id: CustomNextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const postID = typeof id === "string" ? parseInt(id, 10) : undefined;
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const post = getFindById(posts, "id", postID);
  const comment = getFilterById(comments, "post_id", postID);

  useEffect(() => {
    axios.get(PUBLIC_API + "/public/v2/posts").then((res) => {
      setPosts(res.data);
    });

    axios.get(PUBLIC_API + "/public/v2/comments").then((res) => {
      setComments(res.data);
    });
  }, []);

  return (
    <>
      <Meta title={post?.title} desc={post?.body} keyword="Synapsis, Blog" />
      <div className="px-8 max-w-5xl mx-auto">
        <Detail post={post} />
      </div>
    </>
  );
};

Id.getLayout = DefaultLayout;

export default Id;
