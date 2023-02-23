import { Switch } from 'antd';


const onChange = () => {
  console.log(`switch to`);
};

const CustomSwitchButton = ({swicthFuction}) =>(
    <div className='swicth-button'>
        <Switch defaultChecked onChange={onChange} />
    </div>

)

export default CustomSwitchButton;