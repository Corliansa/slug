import type { NextPage } from "next";

import Up from "@/motions/up";
import { BiRocket, BiStar } from "react-icons/bi";
import LinkRoute from "@/ui/linkRoute";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r pt-20 pb-20 transition-all duration-100">
      <Up>
        <h1 className="mb-2 text-3xl font-bold md:mb-5 md:text-6xl">Slug</h1>
      </Up>
      <Up delay={0.2}>
        <h3 className="mb-6 text-2xl text-gray-400">
          Create unlimited short links
        </h3>
      </Up>
      <Up delay={0.4}>
        <div className="flex">
          <LinkRoute href="/dash">
            <BiRocket className="mr-2" />
            Get Started
          </LinkRoute>
        </div>
      </Up>
    </div>
  );
};

export default Home;
