import React, { Component } from 'react';

import ProductList from './Productlist';

export default class Catalog extends Component
{
    render()
    {
        let msg;
        let today=new Date().getDay();
        let date=new Date().toDateString();
        // let catalog=<div>
        // <h1>{title}</h1>
        // <p>Check it now</p>
        //</div>;
        if(today==0)
        {
            msg=<div><h1>Sorry we are closed on Sunday</h1></div>;
        }
        else{
            msg=<div><h1>Catalog for the day:{date} </h1><ProductList/></div>;
        }
        return msg;
    }
}