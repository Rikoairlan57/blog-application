function Detail({ post }: any) {
  return (
    <section className="md:pt-20 md:pb-5">
      <article>
        <div className=" flex justify-start">
          <h1 className=" text-2xl font-semibold mb-4 ">{post?.title}</h1>
        </div>
        <div>{post?.body}</div>
      </article>
    </section>
  );
}

export default Detail;
