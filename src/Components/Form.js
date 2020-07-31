import React from 'react';

import '../App.css';




class Form extends React.Component{
    constructor(props) {
        super (props);
        this.state={ data:[]};
        this.addData = this.addData.bind(this);

        }
addData (newData){
    let data =this.state.data;
    data.push(newData);
    this.setState({data});
}

    
render (){
    return (
        <div>
            <h1>Controlled Form</h1>
            <form addData={this.addData} data={this.state.data}>
            </form>
      
            
        </div>
        
    );
}
}
export default Form; 
