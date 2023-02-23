import Profile from '../../assets/images//Dp.png';


export default function ProfileInfo({name}) {
    return (
        <>
            <div className='profileInfo'>
                <img src={Profile} alt="profile image" />
                <div className='profileInfo-content'>
                    <h1>{name}</h1>
                    <p>Manager</p>
                </div>
            </div>
        </>
    )
}