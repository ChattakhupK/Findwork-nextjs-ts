import React from "react";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/sonner";

interface Children {
  children: React.ReactNode;
}
const Provider = ({ children }: Children) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster position="top-center" expand={true} />
      </ThemeProvider>
    </>
  );
};

export default Provider;
