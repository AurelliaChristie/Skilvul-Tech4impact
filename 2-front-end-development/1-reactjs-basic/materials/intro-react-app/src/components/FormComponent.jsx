import React, {Component} from "react";

class FormComponent extends Component{
    constructor(props){

        super(props)
        
        this.state={
            value:''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        console.log(event.target.value)
    }

    handleSubmit(event){
        event.preventDefault();

        alert('Nama saya' + this.state.value)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" nama="nama_lengkap" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default FormComponent;