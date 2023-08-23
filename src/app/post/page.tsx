import { Post } from "@prisma/client";
import AddPost from "./AddPost";

const Page = async () => {
  // const response = await fetch("http://localhost:3000/api/posts", {
  //   method: "GET",
  //   cache: "no-store",
  // });
  // const posts: Post[] = await response.json();

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">記事一覧</h1>
      <ul>
        {/* {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))} */}
      </ul>
      <AddPost />
    </div>
  );
};

export default Page;
