import React, { FC } from 'react';
import styles from './summoners.less';
import { connect, SummonersModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  summoners: SummonersModelState;
}

const Summoners: FC<PageProps> = ({ summoners }) => {
  console.log(summoners);
  return (
    <div className={styles.title}>
      <h1>Page summoners</h1>
      <h2>This is {summoners.name}</h2>
    </div>
  );
};
export default connect(({ summoners }: { summoners: SummonersModelState }) => ({
  summoners,
}))(Summoners);
