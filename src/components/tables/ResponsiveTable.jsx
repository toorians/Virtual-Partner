import Google from '../../assets/images/google.png';
import Yahoo from '../../assets/images/yahoo.png';
import Meta from '../../assets/images/meta.png';
import Apple from '../../assets/images/apple.png';





export default function ResponsiveTable() {
    return (
        <>
            <table className="responsive-table table-hover">
                <thead>
                    <tr>
                        <td>RECENT PROJECTS</td>
                        <td>CREATED</td>
                        <td>REPORTER</td>
                        <td>DUE</td>
                        <td>STATUS</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={Google} alt="Google" width={29} height={30} />Google</td>
                        <td>Thu, 26 Oct</td>
                        <td>Christian Matthews</td>
                        <td>Thu, 26 Oct</td>
                        <td><button className='status-warning-btn'>IN PROGRESS</button></td>
                    </tr>
                    <tr>
                        <td><img src={Meta} alt="Meta" width={29} height={30} />Meta</td>
                        <td>Thu, 26 Oct</td>
                        <td>Arthur Cook</td>
                        <td>Thu, 26 Oct</td>
                        <td><button className='status-primary-btn'>OPEN</button></td>
                    </tr>
                    <tr>
                        <td><img src={Yahoo} alt="Yahoo" width={29} height={30} />Yahoo</td>
                        <td>Thu, 26 Octth</td>
                        <td>Evelyn Tucker</td>
                        <td>Thu, 26 Oct</td>
                        <td><button className='status-warning-btn'>IN PROGRESS</button></td>
                    </tr>
                    <tr>
                        <td><img src={Apple} alt="Apple" width={29} height={30} />Apple</td>
                        <td>Thu, 26 Octpenter</td>
                        <td>Donald Curtis</td>
                        <td>Thu, 26 Oct</td>
                        <td><button className='status-primary-btn'>OPEN</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}