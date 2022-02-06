import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import LoginPageLayout from "components/LoginPageLayout";
import LobbySection from "components/LobbySection";

export default function Login() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <LoginPageLayout>
          <LobbySection />
        </LoginPageLayout>
      </StickyProvider>
    </ThemeProvider>
  );
}
