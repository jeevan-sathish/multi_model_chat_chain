export async function getResponse() {
  const response = await fetch("http://127.0.0.1:8000/");

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch data from the API");
  }
}
