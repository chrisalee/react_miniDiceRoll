// import React, { useState } from 'react';

// const DiceRoll = () => {

//     // let numberOfDice = 2;
    
//     // const [rolls, setRolls] = useState([]);
//     const [rollNumber, setRollNumber] = useState(1);
//     const [isDouble, setIsDouble] = useState(false);
//     // const [max, setMax] = useState(0);
//     // const [min, setMin] = useState(12);
//     // const [avg, setAvg] = useState(0);

//     const roll = () => {
//         setRollNumber(rollNumber + 1);
//         const dice1 = Math.floor(Math.random() * 6 + 1);
//         const dice2 = Math.floor(Math.random() * 6 + 1);
//      //   const checkDouble = () => {
//             if(dice1 === dice2) {
//                 setIsDouble(true);
//             }
//         }
        
//         console.log("Dice 1:", dice1, "Dice 2:", dice2);
//         console.log('roll Number', rollNumber);
//         console.log('same dice', isDouble);
//         return (rollNumber, dice1, dice2);
//     }

    

//     const handleClick = (event) => {
//         roll();
//         if(!isDouble) {
//             roll();
            

//         }
    
//     }

//     return (
//         <div>
//             <button onClick={handleClick}>Roll Dice</button>
//         </div>
//     )
// }

// export default DiceRoll;
