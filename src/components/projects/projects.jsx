import CountUp from 'react-countup';

export default function Projects({value}) {
    return (
        <>
            <div className='products-charts-child1'>
                <div className='products-charts-child2'>
                    <div className='products-charts-child3'>
                        <h1 className='mb-0'><CountUp end={value}/></h1>
                    </div>
                </div>
            </div>
        </>
    )
}