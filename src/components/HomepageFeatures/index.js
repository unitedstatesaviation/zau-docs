import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Welcome to the Last Frontier',
  imgSrc: require('@site/static/img/ZANb.png'),
    description: (
      <>
        America's Last Frontier (ZAN)
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div style={{ textAlign: 'center', margin: '0 auto' }}>
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSEC5fs3Np2pEulAIBlhCNuL8feIDhlkxkpK5VyF2kfZopdeLhkWOgO1t3wFtBkGCRRS5A30_lUR_rs/pubhtml?widget=true&amp;headers=false"
        width="100%"
        height="600"
        style={{ border: 'none' }}
        title="Anchorage ARTCC"
      />
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
