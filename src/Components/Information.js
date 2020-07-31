import React from 'react';

class Information extends React.Component{
    constructor(props) {
        super (props);
        this.state= {data: {Firstname:'', Lastname:'', Age:'0', Gender:'Female', Occoupation:''}}
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);

    }
    handleChange(event) {
        let {name, value} = event.target 
        let data = this.state.data; 
        data [name] = value; 
        this.setState({data})

    }

    handleSubmit (event) {
    event.preventDefautlt();
    if (!this.error) {
        this.props.addDate(this.state.data);
    }


}
    render (){
        let data = this.state.data;
        return (
            <div className="test1">
                <form>
                    <div className ="Form Row">
                        <div className ="Fname">
                            <lable>Firstname:</lable>
                            <input
                            className="Form-control"
                            name= "Firstname"
                            value={data.Firstname}
                            onChange={this.handleChange}
                        />
                        </div> <br/>
                        <div className="Lname">
                            <lable>Lastname:</lable>
                            <input
                            className="Form-control"
                            name="Lastname"
                            value={data.Lastname}
                            onChange={this.handleChange}
                            />
                        </div> <br/>

                        <div className ="Age">
                            <lable>Age:</lable>
                            <input
                            className="Form-control"
                            name="Age"
                            type="number"
                            value={data.Age}
                            onChange={this.handleChange}
                            />
                        </div> <br/>
                        <div className ="Gender">
                            <lable>Gender:</lable>
                            <select 
                            className="Form-control"
                            name= "Gender"
                            defaultValue={data.Gender}
                            onChange={this.handleChange}
                           >
                                <option> Male</option>
                                <option> Female</option>
                        
                            </select>
                        </div> <br/>

                        <div className ="Occupation">
                            <lable>Occupation:</lable>
                            <input
                            className="Form-control"
                            name="Occupation"
                            value={data.Occupation}
                            onChange={this.handleChange}
                            />
                        </div> <br/>

                        <div className = "button">
                            <button onClick={this.handleSubmit} className ="btn btn-primary">Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }

}
export default Information;