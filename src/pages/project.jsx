import { Col, Row, Input, Space } from 'antd';
import DashboardBtn from '../components/Buttons/DashboardBtn';
import { SearchOutlined } from '@ant-design/icons';
import DropdownBtn from '../components/Buttons/dropdownBtn';
import AntDatePicker from '../components/datepicker/datepicker';
import DataTable from '../components/datatable/datatable';
import CountUp from 'react-countup';



export default function Customer() {
    return (
        <section className='app-wrapper'>
            <Row>
                <Col xxl={{ span: 23 }} xs={{ span: 24 }} className="mx-auto">
                    <div className='CustomerHeadContent bg-transparent w-100 h-100' style={{ marginBottom: '40px' }}>
                        <DashboardBtn value="Create Project" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xxl={{ span: 24 }} xs={{ span: 24 }}>
                    <div className='InnerBodyContent'>
                        <Row className="customers-parent-div">
                            <Col xxl={{ span: 15 }} xs={{ span: 24 }}>
                                <div className='projects-image'>
                                    <div className='projectImageInner'>
                                        <div className='projectInnerContent'>
                                            <span><CountUp duration={1} start={0} end={0} /></span>
                                            <p>Not Started</p>
                                        </div>
                                        <div className='projectInnerContent'>
                                            <span><CountUp duration={1} start={0} end={6} /></span>
                                            <p>In Progress</p>
                                        </div>
                                    </div>
                                    <div className='projectImageInner'>
                                        <div className='projectInnerContent'>
                                            <span><CountUp duration={1} start={0} end={2} /></span>
                                            <p>On Hold</p>
                                        </div>
                                    </div>
                                    <div className='projectImageInner'>
                                        <div className='projectInnerContent'>
                                            <span><CountUp duration={1} start={0} end={0} /></span>
                                            <p>Cancelled</p>
                                        </div>
                                    </div>
                                    <div className='projectImageInner'>
                                        <div className='projectInnerContent'>
                                            <span><CountUp duration={1} start={0} end={20} /></span>
                                            <p>Completed</p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col xxl={{ span: 9 }} xs={{ span: 24 }}>
                                <div className='customer-right-sec'>
                                    <Input suffix={<SearchOutlined />} placeholder="search here" name="search" className='rounded-pill search-bar' />
                                    <Space>
                                        <AntDatePicker />
                                        <DropdownBtn value="Export" primary={"#4160CC"} color={"#fff"} />
                                        <DropdownBtn value="Results" />
                                    </Space>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl={{ span: 24 }} xs={{ span: 24 }}>
                                <div className='px-4'>
                                    <DataTable end={8} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </section>
    )


}