import { getResponse } from "../model/api";

export async function fetchData() {
  try {
    const data = await getResponse();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
