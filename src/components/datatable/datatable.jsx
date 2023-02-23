import { Table } from 'antd';
import Dp from '../../assets/images/Dp.png'
import ActiveBtn from '../Buttons/activebtn';
import EditBtn from '../Buttons/editBtn';
import DeleteBtn from '../Buttons/delete';
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import GolbalModal from '../modal/modal';


const DataTable = ({ end, id }) => {

    const location = useLocation();
    const link = useNavigate();
    const [page, setPage] = useState([1]);
    const [pageSize, setPageSize] = useState([end]);
    const [open, setOpen] = useState(false);

    const data = [
        {
            UserID: "1",
            name: "Pete Richardson",
            email: "info@virtualpartner.com",
            phone: "000-1111-222-3",
            createBy: "Jack Chan",
            date: "Thu, 26 Oct",
            //    age:"10",
            //    address:"Address 1",
            key: "1"
        },
        {
            UserID: "2",
            name: "Koresi Tabuya",
            email: "info@virtualpartner.com",
            phone: "000-1111-222-3",
            createBy: "Jack Chan",
            date: "Thu, 26 Oct",
            // age:"20",
            // address:"Address 2",
            key: "2",
        },
        {
            UserID: "3",
            name: "Regina Wisozk",
            email: "info@virtualpartner.com",
            phone: "000-1111-222-3",
            createBy: "Jack Chan",
            date: "Thu, 26 Oct",
            // age:"30",
            // address:"Address 3",
            key: "3"
        },
        {
            UserID: "4",
            name: "Pete Richardson",
            email: "info@virtualpartner.com",
            phone: "000-1111-222-3",
            createBy: "Jack Chan",
            date: "Thu, 26 Oct",
            //    age:"10",
            //    address:"Address 1",
            key: "4"
        },
        {
            UserID: "5",
            name: "Koresi Tabuya",
            email: "info@virtualpartner.com",
            phone: "000-1111-222-3",
            createBy: "Jack Chan",
            date: "Thu, 26 Oct",
            // age:"20",
            // address:"Address 2",
            key: "5"
        },
        {
            UserID: "6",
            name: "Regina Wisozk",
            email: "info@virtualpartner.com",
            phone: "000-1111-222-3",
            createBy: "Jack Chan",
            date: "Thu, 26 Oct",
            // age:"30",
            // address:"Address 3",
            key: "6"
        },
        {
            UserID: "7",
            name: "Koresi Tabuya",
            email: "info@virtualpartner.com",
            phone: "000-1111-222-3",
            createBy: "Jack Chan",
            date: "Thu, 26 Oct",
            // age:"20",
            // address:"Address 2",
            key: "7"
        },
        {
            UserID: "8",
            name: "Regina Wisozk",
            email: "info@virtualpartner.com",
            phone: "000-1111-222-3",
            createBy: "Jack Chan",
            date: "Thu, 26 Oct",
            // age:"30",
            // address:"Address 3",
            key: "8"
        },
        {
            UserID: "9",
            name: "Koresi Tabuya",
            email: "info@virtualpartner.com",
            phone: "000-1111-222-3",
            createBy: "Jack Chan",
            date: "Thu, 26 Oct",
            // age:"20",
            // address:"Address 2",
            key: "9"
        },
        {
            UserID: "10",
            name: "Regina Wisozk",
            email: "info@virtualpartner.com",
            phone: "000-1111-222-3",
            createBy: "Jack Chan",
            date: "Thu, 26 Oct",
            // age:"30",
            // address:"Address 3",
            key: "10"
        }
    ]
    const columns = [
        {
            title: "#",
            dataIndex: "UserID",
            key: "key"
        },
        {
            title: "Customer Name",
            dataIndex: "name",
            key: "key",
            render: name => {
                return (
                    <div className='d-flex align-items-center'>
                        <img src={Dp} width={41} height={41} className="me-3" />
                        <p className='mb-0'>{name}</p>
                    </div>
                )
            },

        },
        {
            title: "Email",
            dataIndex: "email",
            key: "key",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "key",
        },
        {
            title: "Active",
            key: "key",
            render: () => {
                return <ActiveBtn />
            }
        },
        {
            title: "Create By",
            dataIndex: "createBy",
            key: "key"
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "key",
        },
        {
            title: "Action",
            key: "key",
            render: () => {
                return (
                    <div className='d-flex align-items-center justify-content-center'>
                        <EditBtn />
                        <div className='vline'></div>
                        <DeleteBtn />
                    </div>
                )
            }
        }
        // {
        //     title:"Age",
        //     dataIndex:"age",
        //     key:"key",
        //     sorter: (a,b) => a.age - b.age
        // },
        // {
        //     title:"Address",
        //     dataIndex:"address",
        //     key:"key"
        // },
        // {
        //     title:"Gratuated",
        //     key:"key",
        //     render: payload =>{
        //         return <p>{payload.age>20?"yes":"No"}</p>
        //     }
        // }
    ]
    return (
        <>
            <Table
                dataSource={data}
                columns={columns}
                pagination={{
                    current: page,
                    pageSize: pageSize,
                    onChange: (page, pageSize) => {
                        setPage(page);
                        setPageSize(pageSize)
                    }
                }}
                onRow={(data) => ({
                    onClick: () => {
                        location.pathname === "/project" ? link("/project/projectInfo", { state: { data } }) :
                        location.pathname === "/project/projectInfo" ? setOpen(true) :
                        location.pathname === "/customer" ? link("/customer/customerProfile", { state: { data } }) :
                        location.pathname === "/customer/customerProfile" ? (id === "1" ?  alert("sorry tab " + id + " has no modal") :
                        id === "2" ? setOpen(true) :
                        id === "3" ? setOpen(true) :
                        id === "4" ?  alert("sorry tab " + id + " has no modal") :
                        alert("id not found")) :
                        alert("Sorry Location Not Found")
                    }
                    // onClick:() => (alert(data.name))
                })}
            >

            </Table>

            {open &&
                <GolbalModal value={open} setOpen={setOpen} id={id}/>
            }


        </>
    )
}

export default DataTable;
