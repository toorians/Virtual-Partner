import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import React from 'react';
const menu = (
  <Menu>
    <Menu.Item>item 1</Menu.Item>
    <Menu.Item>item 2</Menu.Item>
  </Menu>
);

const DropdownBtn = ({ value,primary,color }) => (
  <Dropdown overlay={menu}>
    <Button style={{backgroundColor:primary,color:color,borderRadius:'7px'}}>
      {value}
      <DownOutlined />
    </Button>
  </Dropdown>
);
export default DropdownBtn;