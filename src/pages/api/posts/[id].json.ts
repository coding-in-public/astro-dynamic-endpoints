export const prerender = false;

import type { APIRoute } from "astro";

export const DELETE: APIRoute = async ({ params }) => {
  const id = params.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();
  return new Response(
    JSON.stringify({
      message: id,
    })
  );
};
