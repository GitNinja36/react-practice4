import { useState } from "react";

function Lottery (){

    let sumOfNumber = (number)=> {
        let num = number.toString().split('').map(Number);
        return  num.reduce((accumulator, currValue) => accumulator + currValue, 0);
    }

    let [random, setRandome] = useState(0);
    let [isSumEquals15, setisSumEquals15]  = useState(false);

    function handelLotteryNumber(){
        let genrativeNumber = genRandomNumber()
        setRandome(genrativeNumber);
        setisSumEquals15(sumOfNumber(genrativeNumber) === 15);
    } 

    let genRandomNumber =() =>{
        return Math.floor(Math.random() * 900) + 100;
        // return 159; 
    } 

    return (
        <>
        <h1>{isSumEquals15 ? "Congurutulation! you Won": ""}</h1>
        <h1>Lottery</h1>
        <h4>your lottery number is : {random}</h4>
        <button onClick={handelLotteryNumber}>Get New ticket</button>
        </>
    )
}
export default Lottery