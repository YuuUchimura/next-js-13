import { Suspense } from "react";
import UserList from "./UserList";
import OtherUserList from "./OtherUserList";

const Page = async () => {
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <Suspense fallback={<p className="text-red-700">Loading UserList...</p>}>
        <UserList />
      </Suspense>
      <Suspense fallback={<p>Loading OtherUserList...</p>}>
        <OtherUserList />
      </Suspense>
    </div>
  );
};

export default Page;
