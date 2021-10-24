import styled from 'styled-components';

const ButtonComponent = styled.div`
   padding: 5px ${props => props.pLeftRight}
`;

function StyleComponentThree(params){
    return(
       <ButtonComponent pLeftRight="10px">Hello World</ButtonComponent>
    )
};

export default StyleComponentThree;