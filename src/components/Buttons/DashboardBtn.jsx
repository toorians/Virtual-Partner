import { PlusOutlined } from '@ant-design/icons';




export default function DashboardBtn({value}) {

 return(
   <>
          <button className='add-emp-btn'><PlusOutlined />{value}</button>
   </>
 )
  
}