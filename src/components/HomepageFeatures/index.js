import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Es sind folgende Seiten bereits angelegt:',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
        <>
          <div> Lehrplan &gt; Rahmenlehrplan </div>
          <div>  Lehrplan &gt; Landeslehrplan  </div>
         <div>  Lehrplan &gt; Umsetzungsstruktur &gt; ET &gt; Details &gt; 1. Lehrjahr &gt; Ausführliche Umsetzungsstruktur:  Link für Ohmsches Gesetzt      </div>           
        </>    
    ),
  },
  {
    title: 'Vorbereitung',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Lehrstoff  &gt; Labor &gt; 3. Lehrjahr  &gt; Maschinenübungen &gt; Trafo &gt; Wechselstromtrafo 
      </>
    ),
  },
  {
    title: 'Laborübersicht',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Labore  &gt; B1  &gt; Modelle  &gt; Leybold 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
