import * as React from 'react';
import { HeroProps } from 'umi';
interface IFreeHeroProps {
  hero: HeroProps;
  active: boolean;
  onMouseEnter: () => void;
}

const FreeHero: React.FunctionComponent<IFreeHeroProps> = ({
  hero,
  active,
  onMouseEnter,
}) => {
  return (
    <img
      onMouseEnter={onMouseEnter}
      style={{
        borderRadius: '5px',
        height: '69px',
        margin: '5px',
        width: active ? '224px' : '69px',
      }}
      src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${hero.ename}/${
        hero.ename
      }${active ? '-freehover.png' : '.jpg'}`}
    />
  );
};

export default FreeHero;
