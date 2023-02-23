import { Input } from 'antd';
import { TiAttachment, } from 'react-icons/ti';
import { RiSendPlaneFill } from 'react-icons/ri';
import { useState } from 'react';


export default function Todo() {

    const time = new Date().toLocaleTimeString();

    const [todo, setTodo] = useState("")

    const [updateTodo, setUpdateTodo] = useState([])


    const GetInput = (e) => {
        setTodo(e.target.value)

    }
    const AddTodo = () => {
        if (todo !== "") {
            setUpdateTodo((prev) => {
                return [...prev, todo]
            })
            setTodo("")
        }
        else {
            alert("Input field is empty")
        }

    }


    return (
        <>
            <div className='todo'>
                <ul>
                    {updateTodo.map((value, index) => {
                        return (

                            <div key={index}>
                                <div className='d-flex justify-content-between'>
                                    <p>I am {index}</p>
                                    <span>{time}</span>
                                </div>
                                <li className="todo-list">{value}</li>
                            </div>
                        )
                    })}
                </ul>
                <div className='todoChild'>
                    <Input
                        size="large"
                        placeholder="Comments"
                        suffix={<TiAttachment style={{ width: "25px", height: "25px" }} />}
                        value={todo}
                        onChange={GetInput} />
                    <button className='primaryBtn' onClick={AddTodo}><RiSendPlaneFill style={{ width: "30px", height: "25px" }} /></button>
                </div>
            </div>
        </>
    )
}