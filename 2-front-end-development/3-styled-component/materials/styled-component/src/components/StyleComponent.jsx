import styled from "styled-components"

// styled.tag_HTML
// Button -> styled component 
const Button = styled.button`
    background: none;
    color: palevioletred;
    font-size: 1em;
    padding: 10px;
    border: 0px;
`;

// Extend style
const ButtonOutline = styled(Button)`
    border: 2px solid palevioletred;
`;

const ButtonColor = styled(Button)`
    background-color: palevioletred;
    color: white;
    border-radius: 10px;
`;

function StyleComponent(){
    return(
        <>
          <Button>
            Click Me!
          </Button>
          <ButtonOutline>
              Click Me 2!
          </ButtonOutline>
          <ButtonColor>
              Click Me 3!
          </ButtonColor>
        </>

    )
}

export default StyleComponent;