import React from 'react';
import { ConnectProps } from 'umi';
import styles from './ename.less';

interface PageProps extends ConnectProps {}

export default function({ match }: PageProps) {
  return (
    <div className={styles.title}>
      <h1>heroDetails Page {(match?.params as any)?.ename}</h1>
    </div>
  );
}
