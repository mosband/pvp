import React, { ReactElement } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import styles from './index.less';
const { Header, Content, Footer } = Layout;
interface Props {
  children: any;
  location: {
    pathname: string;
  };
}

const menuData = [
  { route: 'heroes', name: '英雄' },
  { route: 'items', name: '局内道具' },
  { route: 'summoners', name: '召唤师技能' },
];

export default function index({
  location: { pathname },
  children,
}: Props): ReactElement {
  return (
    <Layout>
      <Header>
        <div className={styles.logo}>王者荣耀资料库 </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname]}
          style={{ lineHeight: '64px' }}
        >
          {menuData.map(menu => (
            <Menu.Item key={`/${menu.route}`}>
              <Link to={menu.route}>{menu.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Follow xiaohuoni</Footer>
    </Layout>
  );
}
