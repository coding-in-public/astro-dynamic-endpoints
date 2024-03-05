import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
  const products = await getCollection("products", ({ data }) => data.in_stock);
  return new Response(JSON.stringify(products));
};
