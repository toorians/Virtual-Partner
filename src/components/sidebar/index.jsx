import { useState } from "react"
import NavList from "../navList"
import './style.scss';

// images
import Logo from '../../assets/images/svgs/Logo.svg'
import Dashboard from '../../assets/images/svgs/dashboard.svg'
import Project from '../../assets/images/svgs/project.svg'
import Customer from '../../assets/images/svgs/customer.svg'
import Sales from '../../assets/images/svgs/sales.svg'
import Analytics from '../../assets/images/svgs/analytics.svg'
import Tickets from '../../assets/images/svgs/tickets.svg'
import HR from '../../assets/images/svgs/hr.svg'
import Messages from '../../assets/images/svgs/messages.svg'
import Settings from '../../assets/images/svgs/settings.svg'
import Dp from '../../assets/images/Dp.png'
import TogglerIcon from '../../assets/images/svgs/toggler-icon.svg'
import InvoiceIcon from '../../assets/images/svgs/invoiceIcon.svg'
import MerchantIcon from '../../assets/images/svgs/merchantIcon.svg'
import LeadsIcon from '../../assets/images/svgs/leadsIcon.svg'
import TargetIcon from '../../assets/images/svgs/targetIcon.svg'
import SalesAnalyticsIcon from '../../assets/images/svgs/salesAnalyticsIcon.svg'



export default function SideBar() {
    const [sidebar, setSideBar] = useState(true)
    return (
        <div className={sidebar ? 'sidebar open' : 'sidebar h-100 close'} >


            {/* sidebar logo */}
            <img src={Logo} alt="logo" width={201} height={56}  className="logo"/>
            {/* sidebar logo */}


            {/* sidebar Items */}
            <ul className="list-inline sidebar-list">
                <NavList icon={Dashboard} label='Dashboard' address="/home" />
                <NavList icon={Project} label='Project' address="/project"/>
                <NavList icon={Customer} label='Customer' address="/customer"/>
                <NavList icon={Sales} label='Sales' hasDropdown={true} address="/sales">
                    <ul className="list-inline style-dropdown">
                        <NavList icon={InvoiceIcon} label='Invoice' address="/sales/invoice" onClick={()=>alert("invoice is working")}/>
                        <NavList icon={MerchantIcon} label='Merchant Center' address="/sales/merchantCenter" />
                        <NavList icon={LeadsIcon} label='Leads' address="/sales/leads" />
                        <NavList icon={TargetIcon} label='Target' address="/sales/target" />
                        <NavList icon={SalesAnalyticsIcon} label='Sales Analytics' address="/sales/salesAnalytics" />
                    </ul>
                </NavList>
                <NavList icon={Analytics} label='Analytics' address="/analytics" />
                <NavList icon={Tickets} label='Tickets' address="/tickets" />
                <NavList icon={HR} label='Human Resouse' hasDropdown={true} address="/resouse">
                <ul className="list-inline style-dropdown">
                        <NavList icon={Dashboard} label='HR 1' address="/hr1" />
                        <NavList icon={Project} label='HR 2' address="/hr2" />
                        <NavList icon={Customer} label='HR 3' address="/hr3" />
                        <NavList icon={Sales} label='HR 4' address="/hr4" />
                    </ul>
                </NavList>
                <NavList icon={Messages} label='Messages' address="/messages" />
                <NavList icon={Settings} label='Settings'  address="/settings" />
            </ul>
            {/* sidebar Items */}


            {/* sidebar LogOut Section */}
            <div className="logout-parent">
                <div className="Logout bordered">
                    <div className="Logout-img">
                        <img src={Dp} alt="Dp" width={100} height={100} />
                    </div>
                    <h3 className="mb-0">Usama Ovais Kapadia</h3>
                    <p className="mb-0">Founder</p>
                    <button className="logout-btn">Logout</button>
                </div>
            </div>
            {/* sidebar LogOut Section */}


            {/* sidebar toggler Icon */}
            <div className="toggler-icon w-100 text-end">
                <img src={TogglerIcon} alt="TogglerIcon" width={24.67} height={16.92} onClick={()=>setSideBar(sidebar?false:true)}/>
            </div>
            {/* sidebar toggler Icon */}


        </div>
    )
}