import React, { FC } from 'react';
import styles from './heroes.less';
import { Row, Col } from 'antd';
import { connect, HeroesModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  heroes: HeroesModelState;
}

const Heroes: FC<PageProps> = ({ heroes }) => {
  return (
    <Row>
      {heroes.heroes.map(({ ename, cname }) => (
        <Col key={ename} span={3} className={styles.hero}>
          <img
            src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${ename}/${ename}.jpg`}
          />
          <p>{cname}</p>
        </Col>
      ))}
    </Row>
  );
};
export default connect(({ heroes }: { heroes: HeroesModelState }) => ({
  heroes,
}))(Heroes);
