import HomePage from "@/components/home";

import { DefaultLayout } from "./layout";
import { CustomNextPage } from "next";
import { Meta } from "@/components/meta";

const Home: CustomNextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Meta desc="Synapsis Blog" keyword="Synapsis, Blog" />
      <HomePage />
    </main>
  );
};

Home.getLayout = DefaultLayout;

export default Home;
