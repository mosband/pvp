import React, { FC } from 'react';
import styles from './items.less';
import { connect, ItemsModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  items: ItemsModelState;
}

const Items: FC<PageProps> = ({ items }) => {
  console.log(items);
  return (
    <div className={styles.title}>
      <h1>Page items</h1>
      <h2>This is {items.name}</h2>
    </div>
  );
};
export default connect(({ items }: { items: ItemsModelState }) => ({
  items,
}))(Items);
