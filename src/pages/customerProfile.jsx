import { Col, Row, Input, Space,Tabs,Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import DropdownBtn from '../components/Buttons/dropdownBtn';
import AntDatePicker from '../components/datepicker/datepicker';
import DashboardBtn from '../components/Buttons/DashboardBtn';
import DataTable from '../components/datatable/datatable';
import { useLocation } from 'react-router-dom';
import ProfileInfo from '../components/profileInfo/profileInfo';
import RelatedLinks from '../components/modalLeftSecMembers/relatedLinks';
import CustomerRating from '../components/Customers/customerProfile/customerRating';







export default function CustomerProfile() {

      // Tabs Data
      const items = [
        { label: 'Projects', key: 'item-1', children: <><DataTable end={4} id="1"/></> },
        { label: 'Invoice', key: 'item-2', children: <><DataTable end={4}  id="2"/></> },
        { label: 'Ticket', key: 'item-3', children: <><DataTable end={2}  id="3"/></> },
        { label: 'Merchant Center', key: 'item-4', children: <><DataTable end={2}   id="4"/></> },
    ];
    // Tabs Data


    // Get Table Data
    const location = useLocation();
    const { data } = location.state;
    // Get Table Data
    
    return (
        <>
            <section className='app-wrapper'>
                <div className='projectInfoBody customerProfile'>
                    <Row>
                        <Col xxl={{ span: 24 }} xs={{ span: 24 }}>

                            <Row>

                                {/* Left Section Start From Here */}
                                <Col xxl={{ span: 6 }} xs={{ span: 24 }}>
                                    <div className='projectInfoLeftSection'>
                                        <h1>CUSTOMER PROFILE</h1>
                                        <Button type="primary" size="small">Edit</Button>
                                        <ProfileInfo name={data.name} />
                                        <RelatedLinks title="Project #" name="#154 Union Processing System" />

                                        <table className='projectDetails'>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Company:
                                                    </td>
                                                    <td>
                                                        Union Processing System
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Phone No.
                                                    </td>
                                                    <td>
                                                        +000-000-00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        City:
                                                    </td>
                                                    <td>
                                                        New York
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Country:
                                                    </td>
                                                    <td>
                                                        United State
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Address:
                                                    </td>
                                                    <td>
                                                        Office# 123 Building xyz Street# 5 New York
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Language:
                                                    </td>
                                                    <td>
                                                        English (US)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Website:
                                                    </td>
                                                    <td>
                                                        www.xyz.com
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                         <CustomerRating  value="4"/>

                                    </div>

                                </Col>
                                {/* Left Section End Here */}



                                {/* Right Section Start From Here */}
                                <Col xxl={{ span: 18 }} xs={{ span: 24 }}>
                                    <div className='projectInfoRightSection'>
                                        <div className='topSec'>
                                            <DashboardBtn value="CREATE INVOICE" />

                                            <div className='customer-right-sec'>
                                                <Input suffix={<SearchOutlined />} placeholder="search here" name="search" className='rounded-pill search-bar' />
                                                <Space>
                                                    <AntDatePicker />
                                                    <DropdownBtn value="Export" primary={"#4160CC"} color={"#fff"} />
                                                    <DropdownBtn value="Results" />
                                                </Space>
                                            </div>
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
        </>
    )
}