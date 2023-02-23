import Dp from '../../assets/images/Dp.png'
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';


export default function AdddMemberSec() {

    //   Insert Image when click the button
    const MemberImage = () => {
        return (
            <img src={Dp} alt="mamber-image" width={44} height={44} />
        )
    }
    const [member, setMember] = useState([]);

    const AddMember = () => {
        setMember(member.concat(<MemberImage key={member.length} />))
    }
    //   Insert Image when click the button


    return (
        <>
            <div className='projectMembers'>
                <div className='member-title'>
                    <p>Members</p>
                    <PlusOutlined onClick={AddMember} />
                </div>
                <div className='member-images'>
                    <MemberImage />
                    <MemberImage />
                    <MemberImage />
                    {member}
                </div>
                <p>3 others</p>
            </div>
        </>
    )
}