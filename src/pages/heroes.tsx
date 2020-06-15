import React, { FC } from 'react';
import styles from './heroes.less';
import { connect, HeroesModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  heroes: HeroesModelState;
}

const Heroes: FC<PageProps> = ({ heroes }) => {
  console.log(heroes);
  return (
    <div className={styles.title}>
      <h1>Page heroes</h1>
      <h2>This is {heroes.name}</h2>
    </div>
  );
};
export default connect(({ heroes }: { heroes: HeroesModelState }) => ({
  heroes,
}))(Heroes);
