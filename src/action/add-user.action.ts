"use server";

import { revalidateTag } from "next/cache";
import { headers } from "@/lib/default-headers";
import type { UserForm } from "../../types";

export async function addUser(data: UserForm) {
  const response = await fetch("https://gorest.co.in/public/v2/users", {
    method: "POST",
    body: JSON.stringify({ ...data }),
    headers,
  });
  // console.log(response);
  // console.log("Request Data:", JSON.stringify(data));
  // console.log("Response Status:", response.status);
  // console.log("Response Text:", await response.text());

  if (!response.ok) {
    throw Error("Failed to create a user");
  }
  revalidateTag("users");
}
