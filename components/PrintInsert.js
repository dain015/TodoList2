import { VscAdd } from "react-icons/vsc"

function PrintInsert({oninputToggle}) {
    return(
        <div>
            <div className="background" onClick={oninputToggle}></div>
            <form>
                <input placeholder="할 일을 입력하세요"></input>
                <button type="submit">
                    <VscAdd />
                </button>
            </form>
        </div>
    )
}

export default PrintInsert