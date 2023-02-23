import { GrCopy } from 'react-icons/gr';
import CopyIcon from '../../assets/images/svgs/copyIcon.svg';


export default function RelatedLinks({title,name}) {
    return (
        <>
            <div className='projectName'>
                <div className='d-flex justify-content-between'>
                    <p>{title}</p>
                    <img src={CopyIcon} alt="CopyIcon" width={14} height={16}/>
                </div>
                <h1>{name}</h1>
            </div>
        </>
    )
}