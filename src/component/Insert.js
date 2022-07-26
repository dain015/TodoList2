import { VscAdd } from "react-icons/vsc"
import { useState } from "react"

function PrintInsert({onInsertToggle, onCreate}) {
    const [value, setValue] = useState("")
    const onChange = e => setValue(e.target.value)
    const onSubmit = e => {
        e.preventDefault()
        onCreate(value)
        setValue("")
        onInsertToggle()
    }
    return(
        <div>
            <div className="background" onClick={onInsertToggle}></div>
            <form onSubmit={onSubmit}>
                <input placeholder="할 일을 입력하세요" value={value} onChange={onChange}></input>
                <button type="submit" >
                    <VscAdd/>
                </button>
            </form>
        </div>
    )
}

export default PrintInsert


// title.preventDefault()
//     onInsertToggle()
//     nextId++
    