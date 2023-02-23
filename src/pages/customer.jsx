import { Col, Row, Input, Space } from 'antd';
import DashboardBtn from '../components/Buttons/DashboardBtn';
// import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import TotalCustomers from '../assets/images/svgs/TotalCustomers.svg';
import ActiveCustomers from '../assets/images/svgs/ActiveCustomer.svg';
import InactiveCustomers from '../assets/images/svgs/InactiveCustomer.svg';
import CustomersProgress from '../components/Customers/CustomerProgress';
import { SearchOutlined } from '@ant-design/icons';
import DropdownBtn from '../components/Buttons/dropdownBtn';
import AntDatePicker from '../components/datepicker/datepicker';
import DataTable from '../components/datatable/datatable';




export default function Customer() {
    return (
        <section className='app-wrapper'>
            <Row>
                <Col xxl={{ span: 23 }} xs={{ span: 24 }} className="mx-auto">
                    <div className='CustomerHeadContent bg-transparent w-100 h-100' style={{ marginBottom: '40px' }}>
                        <DashboardBtn value="Create Customer" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xxl={{ span: 24 }} xs={{ span: 24 }}>
                    <div className='InnerBodyContent'>
                        <Row className="customers-parent-div">
                            <Col xxl={{ span: 15 }} xs={{ span: 24 }}>
                                <div className='w-100 d-flex'>
                                    <CustomersProgress count="1142" content="Total Customers" strokeColor="#0DB1FF" percent={100} icon={TotalCustomers} width={70} height={44} />
                                    <CustomersProgress count="1085" content="Active Customers" strokeColor="#08B902" percent={90} icon={ActiveCustomers} width={28} height={39} />
                                    <CustomersProgress count="57" content="Inactive Customers" strokeColor="#FF0000" percent={10} icon={InactiveCustomers} width={28} height={39} />
                                </div>
                            </Col>
                            <Col xxl={{ span: 9 }} xs={{ span: 24 }}>
                                <div className='customer-right-sec'>
                                    <Input suffix={<SearchOutlined />} placeholder="search here" name="search" className='rounded-pill search-bar' />
                                    <Space>
                                        <AntDatePicker />
                                        <DropdownBtn value="Export" primary={"#4160CC"} color={"#fff"}/>
                                        <DropdownBtn value="Results" />
                                    </Space>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl={{ span: 24 }} xs={{ span: 24 }}>
                                  <div className='px-4'>
                                      <DataTable end={8}/>
                                  </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </section>
    )


}