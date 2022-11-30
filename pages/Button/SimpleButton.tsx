import {useState} from "react";

const SimpleButton = () => {
    const arrayColor: Array<string> = ['blue', 'orange', 'red', 'yellow', 'green', 'pink','#000043','#85f607','#8f049f','#12eab0']
    const [color, setColor] = useState<number>(0)
    const handlerColor = () => {
        setColor(+(Math.random() * arrayColor.length).toFixed())
    }
    return <div>
        <button onClick={handlerColor} style={{color: arrayColor[color], width: '100px', height: '60px'}}>color</button>
    </div>
}

export default SimpleButton;