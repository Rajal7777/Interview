export async function fetchData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
  );

  if (!response.ok) {
    throw new Error("Failed to load the data.");
  }

  const data = await response.json();

  return data;
}
