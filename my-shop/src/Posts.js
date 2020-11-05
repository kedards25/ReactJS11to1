import React, { Component } from 'react';

export default class Posts extends Component {

    constructor()
    {
        super();
        this.state={products:[]}
        //API call;if JSON file is in project then the file 
        //has to be stored in public folder instead of src
        fetch("products.json")
        .then(response=>response.json())
        .then(json=>{this.setState({products:json});})
        .catch(error=>console.log(error));
    }

  render() {
      const list=[];
      for(let product of this.state.products)
      {
          list.push(<div>{product.code}:{product.name}<br/>{product.description}<br/><br/></div>)
      }
    return (
      <div> {list} </div>
    );
  }
}

