import { Dropdown } from './Dropdown'
import React, { Component } from 'react'
import './FilterSec.css'

export default class FilterSec extends Component {
     handleGenreValue=(val)=>{
        console.log(val);
     }
  render() {
    const users = [
    { value: "amit", name: "Amit" },
    { value: "rahul", name: "Rahul" },
    { value: "neha", name: "Sneha" },
  ];
 
    return (
      <div className='row align-items-center border p-2'>
        <div className='col'>
            <Dropdown options={users} placeholder="Genre" label="Genre" onSelectValue={this.handleGenreValue} />
        </div>
        <div className='col'>
            <Dropdown options={users} placeholder="Genre" label="Genre" onSelectValue={this.handleGenreValue} />
        </div>
        <div className='col'>
            <Dropdown options={users} placeholder="Genre" label="Genre" onSelectValue={this.handleGenreValue} />
        </div>
        <div className='col'>
            <Dropdown options={users} placeholder="Genre" label="Genre" onSelectValue={this.handleGenreValue} />
        </div>
        <div className="col d-flex justify-content-center align-items-end">
            <button className="btn btn-primary px-4 applybtn" type="button">
            Apply Filter
            </button>
        </div>
      </div>
    )
  }
}
