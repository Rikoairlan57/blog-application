"use server";

import { revalidateTag } from "next/cache";
import { headers } from "@/lib/default-headers";

export async function deleteUser(userId: string) {
  const response = await fetch(
    `https://gorest.co.in/public/v2/users/${userId}`,
    {
      method: "DELETE",
      headers,
    }
  );

  // console.log(response);
  // console.log("Response Status:", response.status);
  // console.log("Response Text:", await response.text());

  if (!response.ok) {
    throw Error("Failed to delete user");
  }
  revalidateTag("users");
}
