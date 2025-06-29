import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Post6 from "../../src/app/BlogPosts/Post6";
import Post1 from "../../src/app/BlogPosts/Post1";
import Post2 from "../../src/app/BlogPosts/Post2";
import Post3 from "../../src/app/BlogPosts/Post3";
import Post4 from "../../src/app/BlogPosts/Post4";
import Post5 from "../../src/app/BlogPosts/Post5";

const BlogPost = () => {
  const router = useRouter();
  const { post } = router.query;

  const handleTogglePost = () => {
    switch (post) {
      case "comece-de-graca":
        return <Post1 />;

      case "por-tras-do-gfp":
        return <Post2 />;
      case "Como-o-GFP-pode-transformar-a-vida-de-mulheres-vendedoras":
        return <Post3 />;
      case "tutorial-gerenciando-suas-financas-pessoais":
        return <Post4 />;
      case "tutorial-basico-pessoas-comuns":
        return <Post5 />;
      case "como-o-gfp-pode-ajudar-a-vida-do-vendedor-de-tapioca":
        return <Post6 />;
    }
  };

  return <>{handleTogglePost()}</>;
};

export default BlogPost;
