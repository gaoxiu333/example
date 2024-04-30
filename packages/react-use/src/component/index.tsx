import { Suspense } from "react";
import { SuspenseInter } from "./suspense";
import React from "react";
import PostsComponet from "./suspense/PostsComponet";
const AdviceCard = React.lazy(() => import("./suspense/AdviceCard"));
const TextLazy = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(""), 2000);
  })
    .then(() => import("./suspense/TestLazy"))
    .catch((e) => console.log(e));
});

const Component = () => {
  return (
    <div>
      {/* <Suspense fallback={<div>loading...</div>}>
        <AdviceCard />
      </Suspense> */}
      <Suspense fallback={<p>loading...</p>}>
        {/* <TextLazy /> */}
        <PostsComponet/>
      </Suspense>
    </div>
  );
};

export { Component };
