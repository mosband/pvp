import React, { FC, useState } from 'react';
import styles from './heroes.less';
import { Row, Col, Card, Radio } from 'antd';
import { connect, HeroesModelState, ConnectProps, Link } from 'umi';
import FreeHero from '@/components/FreeHero';

interface PageProps extends ConnectProps {
  heroes: HeroesModelState;
}

const heroTypeOptions = [
  { value: 0, label: '全部' },
  { value: 1, label: '战士' },
  { value: 2, label: '法师' },
  { value: 3, label: '坦克' },
  { value: 4, label: '刺客' },
  { value: 5, label: '射手' },
  { value: 6, label: '辅助' },
];

const Heroes: FC<PageProps> = ({ heroes: { heroes, freeHeroes } }) => {
  const [heroType, setHeroType] = useState(0);
  const [active, setActive] = useState(0);
  return (
    <>
      <Card>
        <Radio.Group
          options={heroTypeOptions}
          onChange={({ target }) => {
            setHeroType(target.value);
          }}
          value={heroType}
        />
      </Card>
      <Row>
        {heroes
          .filter(({ hero_type: type }) => heroType === 0 || type === heroType)
          .map(({ ename, cname }) => (
            <Col key={ename} span={3} className={styles.hero}>
              <Link to={`/heroDetails/${ename}`}>
                <img
                  src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${ename}/${ename}.jpg`}
                />
                <p>{cname}</p>
              </Link>
            </Col>
          ))}
      </Row>
      <Row>
        <Col span={24}>
          {freeHeroes.map((hero, index) => (
            <Link key={hero.ename} to={`/heroDetails/${hero.ename}`}>
              <FreeHero
                active={index === active}
                hero={hero}
                onMouseEnter={() => {
                  setActive(index);
                }}
              />
            </Link>
          ))}
        </Col>
      </Row>
    </>
  );
};
export default connect(({ heroes }: { heroes: HeroesModelState }) => ({
  heroes,
}))(Heroes);
