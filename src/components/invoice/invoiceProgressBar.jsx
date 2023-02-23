import { Progress } from 'antd';



export default function InvoiceProgressBar(props) {
    return (
        <>
            <div className='invoice-progress-bar'>
                <Progress strokeLinecap="butt" type="dashboard" percent={props.percent} width={props.width} gapDegree={props.gapDegree} strokeColor={props.strokeColor} />
                <div className='invoice-text'>
                    <p>{props.status}</p>
                    <p>{props.statusValue}</p>
                </div>
            </div>
        </>
    )
}