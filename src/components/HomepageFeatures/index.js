import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Our Objective',
    description: (
      <>
        Our objective is to digitalize the lost and found system and make it a lot easier to get your items back.
      </>
    ),
  },
  {
    title: 'Class Project',
    description: (
      <>
        This project was made for the Software Engennering class in 2023/2024.
      </>
    ),
  },
  {
    title: 'New Knowledge',
    description: (
      <>
        This project helped us learn new technologies and improve our skills, mostly AWS and its utility.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
