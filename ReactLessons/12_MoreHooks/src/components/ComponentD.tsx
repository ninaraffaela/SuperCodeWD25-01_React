import { useCounter } from "../contexts/counterContext"

export function ComponentD(){
    const {count} = useCounter()
    return <div className="component">
        Component D
        <br />
        {count}
    </div>
}