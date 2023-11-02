"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function Detail() {
  return (
    <section className="md:py-20 px-8 max-w-7xl mx-auto">
      <div className="container mx-auto grid grid-cols-1 items-start gap-y-20 gap-x-8 ">
        <div className="card bg-base-100 p-2 shadow-rise-10 border rounded-md">
          <div className="card-body">
            <div className="card-actions py-4">
              <Link href={"/"}>
                <h2 className="card-title font-bold text-lg">test title</h2>
              </Link>
            </div>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              aliquam mollitia quo dicta architecto magnam dolor vel laudantium
              repellat nobis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
