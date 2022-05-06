import { ApolloClientProvider } from "contexts/apollo";
import { MetadataProvider } from "contexts/metadata";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <MetadataProvider>
      <ThemeProvider attribute="class">
        <ApolloClientProvider>{children}</ApolloClientProvider>
      </ThemeProvider>
    </MetadataProvider>
  );
}
