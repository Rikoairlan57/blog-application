import { APP_NAME } from "@/utils/config";
import Head from "next/head";
import React from "react";

export const Meta = ({ title, desc, keyword }: any) => {
  return (
    <Head>
      <title>{title ? title + " - " + APP_NAME : APP_NAME}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={desc} />
      <meta name="keywords" content={keyword} />
    </Head>
  );
};
