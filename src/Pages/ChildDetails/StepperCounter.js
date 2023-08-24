// import React, { useState } from 'react';
// import { Button } from 'baseui/button';
// import { Block } from 'baseui/block';

// function StepperCounter({ onCountChange }) {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(prevCount => {
//       const updatedCount = prevCount + 1;
//       onCountChange(updatedCount);
//       return updatedCount;
//     });
//   };

//   const decrement = () => {
//     setCount(prevCount => {
//       if (prevCount > 0) {
//         const updatedCount = prevCount - 1;
//         onCountChange(updatedCount);
//         return updatedCount;
//       }
//       return prevCount;
//     });
//   };

//   return (
//     <Block display="flex" alignItems="center" justifyContent="center">
//       <Button onClick={decrement} size="compact" shape="pill" disabled={count <= 0}>-</Button>
//       <Block as="span" marginLeft="8px" marginRight="8px" font="font500">{count}</Block>
//       <Button onClick={increment} size="compact" shape="pill">+</Button>
//     </Block>
//   );
// }

// export default StepperCounter;