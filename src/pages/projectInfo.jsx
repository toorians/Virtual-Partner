import { Col, Row, Input, Space, Progress, Tabs } from 'antd';
import DashboardBtn from '../components/Buttons/DashboardBtn';
import { SearchOutlined } from '@ant-design/icons';
import DropdownBtn from '../components/Buttons/dropdownBtn';
import AntDatePicker from '../components/datepicker/datepicker';
import DataTable from '../components/datatable/datatable';
import { useLocation } from 'react-router-dom';
import AdddMemberSec from '../components/modalLeftSecMembers/leftSidemembersec';
import ProfileInfo from '../components/profileInfo/profileInfo';



export default function ProjectInfo() {

    // Tabs Data

    const items = [
        { label: 'Internal Task', key: 'item-1', children: <><DataTable end={4} /></> },
        { label: 'Customer Task', key: 'item-2', children: <><DataTable end={6} /></> },
    ];
    // Tabs Data

    // Get Table Data

    const location = useLocation();
    const { data } = location.state;

    // Get Table Data

    return (
        <section className='app-wrapper'>
            <Row>
                <Col xxl={{ span: 23 }} xs={{ span: 24 }} className="mx-auto">
                    <div className='CustomerHeadContent bg-transparent w-100 h-100' style={{ marginBottom: '40px' }}>
                        <DashboardBtn value="New Task" />
                    </div>
                </Col>
            </Row>

            <div className='projectInfoBody'>
                <Row>
                    <Col xxl={{ span: 24 }} xs={{ span: 24 }}>

                        <Row>

                            {/* Left Section Start From Here */}
                            <Col xxl={{ span: 6 }} xs={{ span: 24 }}>
                                <div className='projectInfoLeftSection'>
                                    <h1>Project Information</h1>

                                    <ProfileInfo name={data.name} />

                                    <div className='projectName'>
                                        <p>Project Name</p>
                                        <h1>Union Processing Systems</h1>
                                    </div>

                                    <table className='projectDetails'>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Project #
                                                </td>
                                                <td>
                                                    154
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Create By:
                                                </td>
                                                <td>
                                                    Bruce Williams
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Date:
                                                </td>
                                                <td>
                                                    21/6/2022
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Status:
                                                </td>
                                                <td>
                                                    <span>In Progress</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className='progressChart'>
                                        <Progress type="circle" percent={72} strokeWidth={10} width={145} />
                                    </div>

                                    <AdddMemberSec />

                                </div>

                            </Col>
                            {/* Left Section End Here */}

                            

                            {/* Right Section Start From Here */}
                            <Col xxl={{ span: 18 }} xs={{ span: 24 }}>
                                <div className='projectInfoRightSection'>
                                    <div className='customer-right-sec'>
                                        <Input suffix={<SearchOutlined />} placeholder="search here" name="search" className='rounded-pill search-bar' />
                                        <Space>
                                            <AntDatePicker />
                                            <DropdownBtn value="Export" primary={"#4160CC"} color={"#fff"} />
                                            <DropdownBtn value="Results" />
                                        </Space>
                                    </div>


                                    <div className="card-container">
                                        <Tabs type="card" items={items} />
                                    </div>
                                </div>
                            </Col>
                            {/* Right Section End  Here */}

                        </Row>
                    </Col>
                </Row>
            </div>
        </section>
    )
}