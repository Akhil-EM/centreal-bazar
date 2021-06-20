import React, { Component } from 'react'
import {imageUrlBase} from '../config'
export default class ProductCard extends Component {
    constructor(props){
       super(props)
    }
    render() {
        let name=this.props.name;
        name=name.slice(0,20)
        return (
            
            <div className="card" style={{width:'14rem',height:'300px',borderRadius:'5px'}}>
                <div className="card-body text-center">
                    <img className='image-align' style={{width:'130px',height:'130px'}} src={imageUrlBase+this.props.imgurl} alt={this.props.urlKey}/>
                    <br/>
                    <p>{name}</p>
                    <h6 className='text-danger'>Rs.{this.props.price}</h6>
                    <button type="button" className="btn btn-danger">Add </button>
                </div>
            </div>
        )
    }
}
