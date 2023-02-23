import { useContext } from "react";
import { ThemeContext } from "../../hooks/themeContext";

import { Switch } from 'antd';



const ThemeButton = () =>{
    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <>
        <div className='swicth-button'>
            <Switch defaultChecked checked={theme === 'dark' ? true : false} onChange={toggleTheme} />
        </div>    
        </>
    )
}

export default ThemeButton;