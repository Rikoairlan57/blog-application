"use server";

import { revalidateTag } from "next/cache";
import { headers } from "@/lib/default-headers";
import type { User } from "../../types";

export async function editUser(data: User) {
  const response = await fetch(
    `https://gorest.co.in/public/v2/users/${data.id}`,
    {
      method: "PATCH",
      body: JSON.stringify(data),
      headers,
    }
  );

  // console.log(response);
  // console.log("Request Data:", JSON.stringify(data));
  // console.log("Response Status:", response.status);
  // console.log("Response Text:", await response.text());

  if (!response.ok) {
    throw Error("Failed to edit a user");
  }
  revalidateTag("users");
}
