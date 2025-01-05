"use client";

import * as React from "react";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "react-query";
import UserInfoProvider from "./UserInfoProvider";

export interface ProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function Providers({ children }: ProvidersProps) {
 
  return (
    <UserInfoProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}
      </QueryClientProvider>
    </UserInfoProvider>
  );
}
