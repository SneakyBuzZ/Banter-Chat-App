"use client";

import { useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { data } = useSession();
  return (
    <>
      <div>HELLO DASHBOARD</div>
      {data && <div>{JSON.stringify(data)}</div>}
    </>
  );
};

export default page;
