import { Col, Row, Progress, Space } from 'antd';
import DashboardBtn from '../components/Buttons/DashboardBtn';
import InvoiceProgressBar from '../components/invoice/invoiceProgressBar';




export default function Invoice() {
    return (
        <section className='app-wrapper'>
            <Row>
                <Col xxl={{ span: 23 }} xs={{ span: 24 }} className="mx-auto">
                    <div className='CustomerHeadContent bg-transparent w-100 h-100' style={{ marginBottom: '40px' }}>
                        <DashboardBtn value="Create New Invoice" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xxl={{ span: 24 }} xs={{ span: 24 }}>
                    <div className='InnerBodyContent vh-100'>
                        <Row>
                            <Col xxl={{ span: 24 }} xs={{ span: 24 }}>
                                <Space wrap>
                                   <InvoiceProgressBar  percent={25} width={115} gapDegree={1} strokeColor="#A662FB" status="UNPAID" statusValue="687 / 1033"/>
                                    {/* <Progress strokeLinecap="butt" type="dashboard" percent={62} width={115} gapDegree={1} strokeColor="#83DA57"/>
                                    <Progress strokeLinecap="butt" type="dashboard" percent={7} width={115} gapDegree={1} strokeColor="#80B5FC"/>
                                    <Progress strokeLinecap="butt" type="dashboard" percent={0} width={115} gapDegree={1} strokeColor="#E89B4D"/>
                                    <Progress strokeLinecap="butt" type="dashboard" percent={0.5} width={115} gapDegree={1} strokeColor="#E06262"/> */}
                                </Space>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </section>

    )
}