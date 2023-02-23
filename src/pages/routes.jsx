
import {
    Routes,
    Route,
} from "react-router-dom";

// routes list
import Dashbaord from "./dashboard";
import Project from "./project";
import Customer from "./customer";
import ProjectInfo from "./projectInfo";
import CustomerProfile from "./customerProfile";
import Invoice from "./invoice";

export default function AppRoutes() {
    return (
        <Routes>
            <Route exactly  path="/home" element={<Dashbaord />} />
            <Route exactly  path="/project" element={<Project />} />
            <Route exactly  path="/project/projectInfo" element={<ProjectInfo />} />
            <Route exactly  path="/customer" element={<Customer />} />
            <Route exactly  path="/customer/customerProfile" element={<CustomerProfile />} />
            <Route exactly  path="/sales/invoice" element={<Invoice/>}/>
        </Routes>
    )

}