import React,{useState} from "react"; 



const SumOf2 = () => {
    let [number1, setNumber1] = useState(0)
    let [number2, setNumber2] = useState(0)
    let [sum, setSum] = useState(0)

    function add(){
        setSum(+number1 + +number2)
    }



    return(
        <div>
                    <input type="text" placeholder="Enter 1st Number" 
                        onChange={(event)=>{setNumber1(event.target.value)}}
                    /> 
                    <input type="text" placeholder="Enter 2nd Number" 
                        onChange={(event)=>{setNumber2(event.target.value)}}
                    />
                    <button onClick={add}>Sum</button>
                    <h1>Sum is {sum} </h1>
        </div>
    )
}

export default SumOf2;