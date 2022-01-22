import axios from "axios";

export const fetchPockemonByUrl = async(url) => {
  const { data } = await axios.get(url);
  return data;
}