import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import CoreFeature from "../sections/core-feature";
import About from "../sections/about";
import Subscribe from "../sections/subscribe";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Open vc Lobby" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          <CoreFeature />
          <About />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
