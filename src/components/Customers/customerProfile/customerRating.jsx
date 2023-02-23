import { Rate } from 'antd';


export default function CustomerRating({value}) {
    return (
        <>

            <div className='customerRating'>
                <p>Customer Rating</p>
                <Rate value={value} />
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore</p>
            </div>
        </>
    )
}              