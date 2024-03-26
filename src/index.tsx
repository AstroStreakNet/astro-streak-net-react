import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";

import "src/styles/globals.css";
import AppRouter from "src/router/AppRouter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      cacheTime: 0,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <AppRouter />
  </QueryClientProvider>
);
