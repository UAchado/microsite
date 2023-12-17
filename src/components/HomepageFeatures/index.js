import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        image: "img/items.png",
        title: 'Lost Items',
        description: (
            <>
                Check all the lost items registered in our system. You can filter your search and see where you can retrieve your belongings.
            </>
        ),
    },
    {
        image: "img/report.png",
        title: 'Report a Loss',
        description: (
            <>
                In case you don't find what your looking for in our list, you can send us an email with a description of it. As soon
                we get something that looks like what you've lost, we'll let you know.
            </>
        ),
    },
    {
        image: "img/points.png",
        title: 'Authorized Points',
        description: (
            <>
                We have several available drop-off points. Find the closest spot to deliver the items you found.
            </>
        ),
    },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
          <div>
              <img alt={title} src={image} width={"250px"}/>
          </div>
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
