import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    title: <Translate>Easy to Use</Translate>,
    img: require("@site/static/img/imagen_1.png").default,
    description: (
      <Translate>
        Facephi SDK was designed from the ground up to be easily installed and
        used to get your application up and running quickly.
      </Translate>
    ),
  },
  {
    title: <Translate>Multiple Platforms</Translate>,
    img: require("@site/static/img/imagen_2.png").default,
    description: (
      <Translate>
        The SDK can be installed on both native and hybrid applications.
      </Translate>
    ),
  },
  {
    title: <Translate>Tailored functionality</Translate>,
    img: require("@site/static/img/imagen_3.png").default,
    description: (
      <Translate>
        The SDK is made up of different components that the client can combine
        as they wish to achieve the functionality they are looking for.
      </Translate>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={img} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
