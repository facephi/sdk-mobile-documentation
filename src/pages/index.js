import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

const PlatformList = [
  {
    title: "Android",
    path: "/docs/android/Mobile_SDK",
  },
  {
    title: "iOS",
    path: "/docs/ios/Mobile_SDK",
  },
  {
    title: "Flutter",
    path: "/docs/flutter/Mobile_SDK",
  },
  {
    title: "Cordova",
    path: "/docs/cordova/Mobile_SDK",
  },
  {
    title: "React Native",
    path: "/docs/react/Mobile_SDK",
  },
];

function Platform({ title, path }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Link to={path} style={{ color: "#ffffff" }}>
          <Heading as="h3">{title}</Heading>
        </Link>
      </div>
    </div>
  );
}

function HomepagePlatforms() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {PlatformList.map((props, idx) => (
            <Platform key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <HomepagePlatforms />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
