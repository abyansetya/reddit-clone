import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { GET_POST_BY_POST_ID } from "../../../graphql/queries";
import Post from "../../../components/Post";

function PostPage() {
  const router = useRouter();
  const { data } = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      post_id: router.query.postId,
    },
  });

  const post: Post = data?.getPostListByPostId;

  return (
    <div>
      <Post post={post} />
    </div>
  );
}

export default PostPage;
