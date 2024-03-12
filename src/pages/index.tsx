import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../../components/Header";
import PostBox from "../../components/PostBox";
import Feed from "../../components/Feed";

export default function Home() {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit 2.0 clone</title>
      </Head>

      {/* Postbox */}
      <PostBox />
      <div>
        {/* Feed */}
        <Feed />
      </div>
    </div>
  );
}
