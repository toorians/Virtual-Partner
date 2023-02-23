import Cancel from '../../assets/images/svgs/cancel.svg';
import Success from '../../assets/images/svgs/success.svg';
import Dp from '../../assets/images/Dp.png';




export default function ActivityTable() {
    return (
        <>
            <table className='recent-activity-table'>
                <thead>
                    <tr>
                        <td>PROFILE</td>
                        <td>STATUS</td>
                        <td>TIME</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='d-flex'>
                            <div className='activity-img'>
                                <img src={Dp} alt="Dp" width="100%" height="100%" />
                            </div>
                            <div>
                                <p>Muhammad Talha</p>
                                <p>Project Manager</p>
                            </div>
                        </td>
                        <td>
                            <img src={Success} alt="Success" />
                        </td>
                        <td>
                            <p>6:00 PM</p>
                            <p>19 July 2021</p>
                        </td>
                    </tr>
                    <tr>
                        <td className='d-flex'>
                            <div className='activity-img'>
                                <img src={Dp} alt="Dp" width="100%" height="100%" />
                            </div>
                            <div>
                                <p>Huzaifa Shahzad</p>
                                <p>Lead Backend Dev...</p>
                            </div>
                        </td>
                        <td>
                            <img src={Cancel} alt="Cancel" />
                        </td>
                        <td>
                            <p>6:00 PM</p>
                            <p>19 July 2021</p>
                        </td>
                    </tr>
                    <tr>
                        <td className='d-flex'>
                            <div className='activity-img'>
                                <img src={Dp} alt="Dp" width="100%" height="100%" />
                            </div>
                            <div>
                                <p>Ghulam Hyder</p>
                                <p>Lead Graphic Designer</p>
                            </div>
                        </td>
                        <td>
                            <img src={Success} alt="Success" />
                        </td>
                        <td>
                            <p>6:00 PM</p>
                            <p>19 July 2021</p>
                        </td>
                    </tr>
                    <tr>
                        <td className='d-flex'>
                            <div className='activity-img'>
                                <img src={Dp} alt="Dp" width="100%" height="100%" />
                            </div>
                            <div>
                                <p>Muhammed Abuzar</p>
                                <p>Lead WordPress Dev...</p>
                            </div>
                        </td>
                        <td>
                            <img src={Success} alt="Success" />
                        </td>
                        <td>
                            <p>6:00 PM</p>
                            <p>19 July 2021</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}