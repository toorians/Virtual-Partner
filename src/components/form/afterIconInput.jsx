
import { Input } from 'antd';
import React from 'react';

const AfterIconInput = ({placeholder, icon, name}) =>(
  <div className='style-input'>
    <Input  placeholder={placeholder} name={name}  />
    {icon}
  </div>
);

export default AfterIconInput;