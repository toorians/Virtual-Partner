import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { GoPrimitiveDot } from 'react-icons/go';

import React from 'react';
const menu = (
  <Menu>
    <Menu.Item>Active 1</Menu.Item>
    <Menu.Item>Active 2</Menu.Item>
  </Menu>
);

const ActiveBtn = () => (
  <Dropdown overlay={menu}>
    <Button className='ActiveBtn'>
     <GoPrimitiveDot />
        Active
      <DownOutlined />
    </Button>
  </Dropdown>
);
export default ActiveBtn;