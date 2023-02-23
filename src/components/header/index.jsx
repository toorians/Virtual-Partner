


import AfterIconInput from "../form/afterIconInput"

// icons
import { SearchOutlined } from '@ant-design/icons';
import Home from '../../assets/images/svgs/home.svg'
import Chat from '../../assets/images/svgs/chat.svg'
import Notification from '../../assets/images/svgs/notification.svg'
import Question from '../../assets/images/svgs/question.svg'
import Setting from '../../assets/images/svgs/settings-gears.svg';
import ThemeButton from "../form/themeSwitcher";




import './style.scss'

export default function Header(){

    return(
        <header className="app-header d-flex align-items-center justify-content-end">
            <ul className="d-flex align-items-center  list-inline mb-0">
                <li><AfterIconInput icon={<SearchOutlined />} placeholder="search here" name="search"  /></li>
                <li><img src={Home} alt="home" /></li>
                <li><img src={Chat} alt="chat" /></li>
                <li><img src={Notification} alt="notification" /></li>
                <li><img src={Question} alt="question" /></li>
                <li><img src={Setting} alt="setting" /></li>
                <li><ThemeButton /></li>
            </ul>
        </header>
    )
}