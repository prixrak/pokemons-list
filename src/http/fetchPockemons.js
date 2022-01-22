import { $host } from "./index";

export const fetchPockemons = async(offset = 0, limit = 12) => {
  const { data } = await $host.get(`api/v2/pokemon/?offset=${offset}&limit=${limit}`);
  const { results } = await data;
  return results;
}