import { $host } from "./index";

export const fetchPockemonById = async(id) => {
  const { data } = await $host.get(`api/v2/pokemon/${id}`);
  return data;
}