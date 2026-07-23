
import './App.css'
//tankstack
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Post from './tankstack/Post'

const queryClient = new QueryClient();



function App() {
 return (
  <QueryClientProvider client={queryClient}>
      <Post />
  </QueryClientProvider>
  )
}

export default App
