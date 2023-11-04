const headers = new Headers();

headers.set("Authorization", process.env.NEXT_PUBLIC_TOKEN!);

headers.set("Content-Type", "application/json");

export { headers };
