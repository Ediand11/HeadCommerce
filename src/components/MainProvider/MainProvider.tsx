"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import StoreProvider from "./StoreProvider";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );
  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </StoreProvider>
  );
};

export default MainProvider;
