import Agent from "@/components/Agent";
import { getCerruntUser } from "@/lib/actions/auth.actions";
import React from "react";

const page = async () => {
  const user = await getCerruntUser();

  return (
    <>
      <h3>Interview Generation</h3>

      <Agent userName={user?.name} userId={user?.id} type="generate" />
    </>
  );
};

export default page;
