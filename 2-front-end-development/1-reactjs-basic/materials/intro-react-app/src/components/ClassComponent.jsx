import React from "react";

class ClassComponent extends React.Component {
    hitme = () => {
        console.log("Hit me class component!")
    }
    
    render(){
        return(
            <div>
                <button onClick={this.hitme}>Hit me class</button>
            </div>
        )
    }
}

export default ClassComponent;