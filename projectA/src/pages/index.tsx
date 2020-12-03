import React from 'react';
import { Foo } from 'library';
import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Foo />
    </div>
  );
}
