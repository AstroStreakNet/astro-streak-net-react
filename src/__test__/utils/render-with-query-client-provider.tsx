import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";

export const renderWithQueryClientProvider = async (children: JSX.Element) => {
  await render(
    <QueryClientProvider client={getQueryClient()}>
      {children}
    </QueryClientProvider>
  );
};

const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        retryDelay: 0,
      },
    },
  });
