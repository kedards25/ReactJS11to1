import React, { Component } from 'react';
import Product from './Product'

export default class ProductList extends Component {

  constructor()
  {
    super();
    this.state={products:[]};
    fetch("products.json")
    .then(response=>response.json())
  //  .then(json=>this.setState({products:json}))
    .then(json=>{console.log(json);})
    .catch(error=>console.log("Err: "+error));
  }

  render() {
    //   let products=[  
    //     {
    //     "code":"P01",
    //      "name":"Product 1",
    //        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    //        "price":25
    //    },
    //    {
    //         "code":"P02",
    //        "name":"Product 2",
    //        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    //        "price":32
    //    },
    //    {
    //         "code":"P03",
    //        "name":"Product 3",
    //        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    //        "price":22
    //    }
    // ];

    let productComponents=[];
    for(let product of this.state.products)
    {
        //We are passing each product as a prop named as item
        //and pushing <Product> component as an array element in productComponents
        productComponents.push(<Product item={product} key={product.code}/>);
    }
    return <ul>{productComponents}</ul>;

  }
}