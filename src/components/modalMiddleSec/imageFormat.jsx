
export default function ImageFormat({name,value,date}) {
    return (
        <>
            <div className='format'>
                <div className='formatImg'><p>{name}</p></div>
                <div className='formatContent'>
                    <p>{value}</p>
                    <p>Friday, July 22, 2022</p>
                </div>
            </div>
        </>
    )
}