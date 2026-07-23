import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./fetch";

//tankstack
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();

function App() {
 return (
  <QueryClientProvider client={queryClient}>
      <Post />
  </QueryClientProvider>
  )
}

export default App


function Post() {
  const { data, isLoading, error } = useQuery({
    //giving the name to the catched data.store this request under the name posts. so that we can use this data in other components as well.
    //later any other component can ask for  queryKey:["posts"] and react-query will return the data from cache instead of making a new request.
    queryKey: ["posts"],  
    queryFn: fetchData,
  });

  console.log(data);

  if (isLoading) return <p>Loading....</p>;

  if (error) return <p>{error.message}</p>;
  return (
    <main>
      {data.map((post) => (
        <div key={post.id}>
            <p> userID: {post.userId} </p>
            <p> ID: {post.id} </p>
            <p> Title: {post.title} </p>
            <p> Body: {post.body} </p>
        </div>
      ))}
    </main>
  );
}


/*
Think of useQuery as a smart assistant that does all the repetitive work for you:
React Query:
    ✓ Starts the request
    ✓ Shows loading state
    ✓ Handles errors
    ✓ Stores the data in a cache
    ✓ Re-renders your component
    ✓ Prevents duplicate requests
    ✓ Refetches when appropriate

*/
