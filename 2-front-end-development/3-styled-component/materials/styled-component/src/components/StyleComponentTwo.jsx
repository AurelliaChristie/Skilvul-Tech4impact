import styled, {keyframes} from "styled-components"

// Keyframes data type
const rotate = keyframes`
   from{
       transform: rotate(0deg);
   }   

   to{
       transform: rotate(360deg);
   }
`;

const Rotate = styled.div`
   animation: ${rotate} 3s linear infinite;
`;

function StyleComponentTwo(params){
   return(
       <Rotate>
           <p>Spin</p>
       </Rotate>
   )
}

export default StyleComponentTwo;