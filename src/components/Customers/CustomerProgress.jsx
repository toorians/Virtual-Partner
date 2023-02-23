import { Progress } from 'antd';
import CountUp from 'react-countup';

export default function CustomersProgress({ count, content, strokeColor, percent, icon, width, height }) {
    return (
        <>
            <div className='customers'>
                <div className='d-flex justify-content-between w-100 align-items-end'>
                    <h1><CountUp start={0} end={count} duration={3} /></h1>
                    <img src={icon} alt="Customers" width={width} height={height} />
                </div>
                <p>{content}</p>
                <Progress percent={percent} showInfo={false} strokeColor={strokeColor} status="active" />
            </div>
        </>
    )
}