import Image from "next/image";
import React from "react";

const Comment = ({ comment }: any) => {
  return (
    <section className="md:pb-20">
      <article>
        <h1 className=" text-2xl font-semibold mb-4">Comment</h1>
        {comment.map((comment: any, index: number) => (
          <ol key={index} className=" list-none m-0 p-0 flex flex-col">
            <li className="flex flex-wrap pb-5 relative">
              <div className="flex-shrink-0 px-2">
                <Image
                  className="rounded-full mr-4"
                  src="https://res.cloudinary.com/rikoairlan/image/upload/v1698965156/user_a9ddjo.webp"
                  alt="user"
                  width={55}
                  height={55}
                  priority
                />
              </div>
              <div className="flex-grow px-2 relative">
                <h3 className="text-lg font-semibold flex items-center">
                  {comment.name}
                </h3>
                <p>{comment.body}</p>
              </div>
            </li>
          </ol>
        ))}
      </article>
    </section>
  );
};

export default Comment;
