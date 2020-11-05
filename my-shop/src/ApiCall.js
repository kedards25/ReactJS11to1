import React, { Component } from 'react';

export default class ApiCall extends Component {

    constructor()
    {
        super();
        this.state={students:[]};
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(data=>data.json())
        .then(json=>{this.setState({students:json});})
        .catch(error=>console.log("Error: "+error))
        .finally(console.log("data fetched successfully"));
    }

  render() {
    const StudentsList=[];
    for(let student of this.state.students)
    {
        StudentsList.push(<div>{student.studentId}:{student.studentName}<br/>
        {student.studentMail}<br/><br/></div>);
    }
    return (
      <div> {StudentsList} </div>
    );
  }
}
