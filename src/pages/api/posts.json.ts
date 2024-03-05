export const prerender = false;

import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return new Response(JSON.stringify(data));
};

export const POST: APIRoute = async ({ request }) => {
  const key = import.meta.env.API_TOKEN;
  const data = await request.json();
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authentication: `Bearer ${key}`,
    },
  });
  const output = await res.json();
  return new Response(
    JSON.stringify({
      message: output.id ? "success" : "failure",
    })
  );
};
