import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroBlock from "@site/src/components/home/hero-block";
import FeatureBlock from "@site/src/components/home/feature-block";
import ComponentBlock from "@site/src/components/home/component-block";
import Footer from "@site/src/components/home/footer";
import { DocsPreferredVersionContextProvider } from "@docusaurus/plugin-content-docs/client";

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <DocsPreferredVersionContextProvider>
      <Layout description={siteConfig.tagline}>
        <div className="min-h-[calc(100vh-100px)]">
          <HeroBlock />
          <ComponentBlock />
          <FeatureBlock />
        </div>
        <Footer />
      </Layout>
    </DocsPreferredVersionContextProvider>
  );
}
