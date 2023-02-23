import { Modal, Row, Col } from 'antd';
import PrimaryBtn from '../Buttons/primaryBtn';
import SecondaryBtn from '../Buttons/secondaryBtn';
import ImageFormat from '../modalMiddleSec/imageFormat';
import Todo from '../todo/todo';
import AdddMemberSec from '../modalLeftSecMembers/leftSidemembersec';
import DetailsTable from '../modalLeftSecMembers/detailstable';
import RelatedLinks from '../modalLeftSecMembers/relatedLinks';
import MiddleSecContent from '../modalMiddleSec/midcontent';
import MiddleSecContent2 from '../modalMiddleSec/midcontent2';
import SuccessBtn from '../Buttons/successBtn';
import DangerBtn from '../Buttons/dangerBtn';
import { useLocation } from 'react-router-dom';
import ProfileInfo from '../profileInfo/profileInfo';
import OutlineDangerBtn from '../Buttons/outlineDangerBtn';
import EditInvoice from '../../assets/images/svgs/editInvoice.svg';
import InvoicePdf from '../../assets/images/svgs/invoicePdf.svg';
import InvoiceDownload from '../../assets/images/svgs/invoiceDownload.svg';
import InvoicePrint from '../../assets/images/svgs/invoicePrint.svg';
import InvoiceEmail from '../../assets/images/svgs/invoiceEmail.svg';
import AquaLogo from '../../assets/images/svgs/aquaLogo.svg';
import InvoiceOptions from '../modalLeftSecMembers/invoiceOptions';



export default function GolbalModal({ value, setOpen, id }) {

    const location = useLocation();

    return (
        <>
            <Modal
                centered
                open={value}
                onCancel={() => setOpen(false)}
                footer={false}
                width={id == "2" ? 970 : 1440}
            >
                <div className={id === "2" ? "InvoiceModalBody" : "ModalBody"}>
                    <Row>
                        <Col xxl={{ span: 24 }} xs={{ span: 24 }}>

                            <Row>

                                {/* Left Section Start From Here */}
                                {id === "2" ?
                                    <Col xxl={{ span: 9 }} xs={{ span: 24 }}>
                                        <div className='ModalLeftSec'>
                                            <h1>Invoice Info</h1>
                                            <ProfileInfo name="Katie Rhodes" />
                                            <RelatedLinks title="Related link" name="Union Processing Systems" />
                                            <DetailsTable />
                                            <OutlineDangerBtn value="UNPAID" />
                                            <PrimaryBtn value="CREATE PAYMENT LINK" />
                                            <SuccessBtn />
                                            <div className='d-flex justify-content-between'>
                                                <InvoiceOptions img={EditInvoice} alt="Edit Invoice" name="Edit Invoice" />
                                                <InvoiceOptions img={InvoicePdf} alt="View PDF" name="View PDF" />
                                                <InvoiceOptions img={InvoiceDownload} alt="Download" name="Download" />
                                                <InvoiceOptions img={InvoicePrint} alt="Print" name="Print" />
                                                <InvoiceOptions img={InvoiceEmail} alt="Email" name="Email" />
                                            </div>
                                        </div>
                                    </Col> :
                                    <Col xxl={{ span: 6 }} xs={{ span: 24 }}>
                                        <div className='ModalLeftSec'>
                                            {location.pathname === "/customer/customerProfile" ? <h2 className='ticketInfo'>Ticket Info</h2> : <h1>Task Info</h1>}
                                            <RelatedLinks title="Project Name" name="Union Processing Systems" />
                                            <DetailsTable />
                                            {location.pathname === "/customer/customerProfile" ? <DangerBtn value="Ticket Close" /> : <PrimaryBtn value="Mark as Complete" />}
                                            <AdddMemberSec />
                                        </div>
                                    </Col>
                                }
                                {/* Left Section End Here */}

                                {/* Middle Section Start From Here */}
                                {id === "2" ?
                                    <Col xxl={{ span: 15 }} xs={{ span: 24 }}>
                                        <div className='ModalMiddleSec'>
                                            <div className='d-flex justify-content-between align-items-start'>
                                                <img src={AquaLogo} />
                                                <h1>INVOICE</h1>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-start'>
                                                <p>Invoice # 1024</p>
                                                <p>Date: 1-AUGUST-2022</p>
                                            </div>
                                            <table className='projectDetails'>
                                                <thead>
                                                    <tr>
                                                        <td>#</td>
                                                        <td>Items</td>
                                                        <td>QTY</td>
                                                        <td>Rates</td>
                                                        <td>Amount</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Dedicated Hosting for 1 year for 3 website</td>
                                                        <td>1</td>
                                                        <td>$900.00</td>
                                                        <td>$900.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>• 4 Core / 8 Thread</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>• Intel Xeon-D CPU</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>• 8 GB RAM</td>

                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>• 1 TB HDD</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>• Unmetered Bandwidth</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>• Multi-Domain Comodo</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>• SSL Certificate - Highest Security Parameter</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>• 24/7 security monitoring</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>• DDoS protection</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <ul>
                                                <li>
                                                    <p>Sub Total</p>
                                                    <p>$900.00</p>
                                                </li>
                                                <li>
                                                    <p>Total</p>
                                                    <p>$900.00</p>
                                                </li>
                                                <li>
                                                    <p>Sub Paid</p>
                                                    <p>-$500.00</p>
                                                </li>
                                                <li>
                                                    <p>Amount Due</p>
                                                    <p>$400.00</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col> :
                                    <Col xxl={{ span: 10 }} xs={{ span: 24 }}>
                                        <div className='ModalMiddleSec'>
                                            {location.pathname === "/customer/customerProfile" ? <DangerBtn value="Cancel My Project And Asking For A Refund" /> : <h1>TASK: LOGO DESIGN</h1>}
                                            {location.pathname === "/customer/customerProfile" ? <MiddleSecContent2 /> : <MiddleSecContent />}


                                            <div className='FilesDownloadSec'>
                                                <SecondaryBtn />

                                                <div className='imgFormatSec'>
                                                    <ImageFormat name="PNG" value="Screenshort" />
                                                    <ImageFormat name="PDF" value="Logo Explain" />
                                                    <ImageFormat name="JPEG" value="Logo Inspiration" />
                                                    <ImageFormat name="MP4" value="Animation Vid..." />

                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                }
                                {/* Middle Section End  Here */}

                                {/* Right Section Start From Here */}
                                {id === "2" ? "" :
                                    <Col xxl={{ span: 8 }} xs={{ span: 24 }}>
                                        <div className='ModalRightSec'>
                                            <Todo />
                                        </div>
                                    </Col>
                                }
                                {/* Right Section End  Here */}

                            </Row>
                        </Col>
                    </Row>
                </div>
            </Modal>
        </>
    )
}

{/* <h1>Rich Text Editor</h1>
 <h1>Draft.js</h1> */}