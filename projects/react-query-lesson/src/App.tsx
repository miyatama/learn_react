import {VFC} from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ClassicalFetchA } from './components/ClassicalFetchA';
import { ClassicalFetchB } from './components/ClassicalFetchB';
import { Layout } from './components/layout';
import { MainContext } from './components/MainContext';
import { MainRTKit } from './components/MainRTKit';
import { ReactQueryA } from './components/ReactQueryA';
import { ReactQueryB } from './components/ReactQueryB';
import { StateProvider } from './context/StateProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
})

const App: VFC = () => {
  // no need exact attribute for Route
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StateProvider>
          <Layout>
            <p>app contents</p>
            <Routes>
              <Route path="/" element={<ReactQueryA/>}/>
              <Route path="/query-b" element={<ReactQueryB/>}/>
              <Route path="/fetch-a" element={<ClassicalFetchA/>}/>
              <Route path="/fetch-b" element={<ClassicalFetchB/>}/>
              <Route path="/main-context" element={<MainContext/>}/>
              <Route path="/main-rtkit" element={<MainRTKit/>}/>
            </Routes>
          </Layout>
        </StateProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default App;
