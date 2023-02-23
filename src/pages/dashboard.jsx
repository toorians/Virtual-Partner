import { Col, Row } from 'antd';
import Polygon from '../assets/images/svgs/polygon.svg';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { BarChart, Bar, Legend, Label } from 'recharts';
import DashboardBtn from '../components/Buttons/DashboardBtn';
import Projects from '../components/projects/projects';
import ResponsiveTable from '../components/tables/ResponsiveTable';
import ActivityTable from '../components/tables/ActivityTable';



const data = [
    {
        name: 'A',
        x: 1,
        y: 100,

    },
    {
        name: 'B',
        x: 2,
        y: 200,

    },
    {
        name: 'C',
        x: 3,
        y: 300,

    },
    {
        name: 'D',
        x: 4,
        y: 150,

    },
    {
        name: 'E',
        x: 5,
        y: 350,

    },
    {
        name: 'F',
        x: 6,
        y: 250,

    },
    {
        name: 'G',
        x: 7,
        y: 500,

    },
];
const piedata = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group D', value: 250 },
];
const COLORS = ['#FFAAB9', '#F3A64E', '#f6e58d', '#73C155', '#F2F2F2'];

const doughnut = [
    { name: 'Group A', value: 100 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS2 = ['#D79AD7', '#A0A2FF', '#9FDFCD', '#FFAAB9'];
const bardata = [
    {
        name: '1',
        uv: 4000,
        pv: 2400,
    },
    {
        name: '2',
        uv: 3000,
        pv: 1398,
    },
    {
        name: '3',
        uv: 2000,
        pv: 9800,
    },
    {
        name: '4',
        uv: 2780,
        pv: 3908,
    },
    {
        name: '5',
        uv: 1890,
        pv: 4800,
    },
    {
        name: '6',
        uv: 2390,
        pv: 3800,
    },
    {
        name: '7',
        uv: 3490,
        pv: 4300,
    },
    {
        name: '8',
        uv: 4000,
        pv: 2400,
    },
    {
        name: '9',
        uv: 3000,
        pv: 1398,
    },
    {
        name: '10',
        uv: 2000,
        pv: 9800,
    },
    {
        name: '11',
        uv: 2780,
        pv: 3908,
    },
    {
        name: '12',
        uv: 1890,
        pv: 4800,
    },
    {
        name: '13',
        uv: 2390,
        pv: 3800,
    },
    {
        name: '14',
        uv: 3490,
        pv: 4300,
    },

];
export default function Dashbaord() {
    return (
        <section className='app-wrapper'>
            <Row>
                {/* dashboard content */}
                <Col xxl={{ span: 19 }} xs={{ span: 24 }}>
                    <Row>
                        <Col xxl={{ span: 9, order: 1 }} md={{ span: 12, order: 1 }} xs={{ span: 24 }} className="margin-bottom">
                            <div className='home-div1 first-div'>
                                <h1 className='h1 mb-0'>Hi, Usama</h1>
                                <p className='p'>Welcome to the Virtual Partner</p>
                                <DashboardBtn value="Add New Employee"/>
                            </div>
                        </Col>
                        <Col xxl={{ span: 9, order: 2 }} md={{ span: 12, order: 2 }} xs={{ span: 24 }} className="margin-bottom">
                            <div className='home-div3'>
                                <p className='chart-p'>PROJECTS</p>
                                <div className='w-100 d-flex justify-content-around align-items-center'>
                                    <p className='chart-p'>NOT STARTED</p>
                                    <p className='chart-p'>IN PROGRESS</p>
                                    <p className='chart-p'>DELIVERED</p>
                                </div>
                                <div className='products-charts'>
                                    <Projects value="50" />
                                    <Projects value="20" />
                                    <Projects value="15" />
                                    <Projects value="5" />
                                    <Projects value="10" />
                                </div>
                                <div className='w-75 mx-auto d-flex justify-content-around align-items-center'>
                                    <p className='chart-p pt-3 pb-0'>URGENT</p>
                                    <p className='chart-p pt-3 pb-0'>COMPLETED</p>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={{ span: 6, order: 3 }} md={{ span: 12, order: 3 }} xs={{ span: 24 }} className="margin-bottom">
                            <div className='home-div2 weekley-leads-chart-parent'>
                                <p className='chart-p'>WEEKLY LEADS</p>
                                <div className='d-flex weekly-div1'>
                                    <h1 className='mb-0 me-2'>401</h1>
                                    <img src={Polygon} alt='Polygon' />
                                </div>
                                <ResponsiveContainer width="100%" height={190}>
                                    <AreaChart
                                        data={data}
                                        fontSize={10}
                                        margin={{
                                            top: 10,
                                            right: 10,
                                            left: -20,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="x" />
                                        <YAxis dataKey="y" />
                                        <Area type="monotone" dataKey="y" stroke="#569F87" fill="#569F87" />
                                        <Tooltip />
                                    </AreaChart>


                                </ResponsiveContainer>
                                {/* <p className='chart-p'>WEEKLY LEADS</p>
                                <div className='d-flex weekly-div1'>
                                    <h1 className='mb-0 me-2'>401</h1>
                                    <img src={Polygon} alt='Polygon' />
                                </div>
                                <img src={WeeklyChart} alt='WeeklyChart' width="100%" height={189.72} /> */}
                            </div>
                        </Col>
                        <Col xxl={{ span: 18, order: 4 }} md={{ span: 24, order: 5 }} xs={{ span: 24 }} className="margin-bottom">
                            <div className='home-div1 monthly-chart-parent d-flex justify-content-between'>
                                <div>
                                    <h1>Monthly Target</h1>
                                    <ResponsiveContainer width={238} height={122}>
                                        <PieChart>
                                            <Pie
                                                data={piedata}
                                                cx={75}
                                                cy={90}
                                                startAngle={180}
                                                endAngle={0}
                                                innerRadius={60}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {data.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                                <Label
                                                    value="78%"
                                                    position="center"
                                                    fill="dark"
                                                    style={{
                                                        fontSize: "20px",
                                                        fontWeight: "bold",
                                                    }}
                                                />
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <h1>Target $15,000</h1>
                                    <h1>Achieved : <span>$12,010</span></h1>
                                </div>
                                <div>
                                    <p className='chart-p'> MONTHLY STATUS</p>
                                    <div className='d-flex monthly-div'>
                                        <h1 className='mb-0 me-2'>64318</h1>
                                        <img src={Polygon} alt='Polygon' />
                                    </div>
                                    <ResponsiveContainer width={500} height={175}>
                                        <BarChart
                                            fontSize={10}
                                            margin={{
                                                top: 10,
                                                right: 0,
                                                left: -20,
                                                bottom: 0,
                                            }}
                                            data={bardata}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Bar dataKey="pv" fill="#8884d8" radius={[20, 20, 0, 0]} />
                                            <Bar dataKey="uv" fill="#F2F2F2" stroke='#F2F2F2' radius={[20, 20, 0, 0]} />
                                            <Tooltip
                                                cursor={{ fill: '#8884d83b' }}
                                                contentStyle={{ backgroundColor: '#0000003d', fontSize: "12px", lineHeight: "1" }}
                                                labelStyle={{ color: '#fff' }}
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={{ span: 6, order: 5 }} md={{ span: 12, order: 4 }} xs={{ span: 24 }} className="margin-bottom">
                            <div className='home-div2  pending-task-chart-parent'>
                                <p className='chart-p'>PENDING TASKS</p>
                                <h1 className='mb-0'>36</h1>
                                <ResponsiveContainer width="100%" height={150}>
                                    <PieChart
                                    >
                                        <Pie
                                            data={doughnut}
                                            innerRadius={25}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
                                            ))}

                                        </Pie>
                                        <Tooltip />
                                        <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{
                                            lineHeight: 2,
                                            fontSize: 10,
                                        }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </Col>
                        <Col xxl={{ span: 18, order: 6 }} md={{ span: 24, order: 6 }} xs={{ span: 24 }}>
                            <div className='home-div1 recentProjects-parent'>
                                <ResponsiveTable />
                            </div>
                        </Col>
                        <Col xxl={{ span: 6, order: 7 }} md={{ span: 24, order: 7 }} xs={{ span: 24 }}>
                            <div className='home-div2 currentActivity-parent'>
                                <div className='d-flex justify-content-between align-items-center  currentActivity-child1'>
                                    <p className='chart-p pb-0'>RECENT ACTIVITY</p>
                                    <button className='seeAll-btn'>See All</button>
                                </div>
                                <ActivityTable />
                            </div>
                        </Col>
                    </Row>
                </Col>
                {/* timeline */}
                <Col xxl={{ span: 5 }} xs={{ span: 24 }} className="timeline-div">
                </Col>
            </Row>
        </section>
    )


}