import React, { Component } from 'react'

export class Dropdown extends Component {
    constructor(props) {
      super(props)
        
      this.state = {
         value:""
      }
    }

    handleChange=(e)=>{
        this.setState({
            value:e.target.value
        });
        this.props.onSelectValue(e.target.value);
        
    }
  render() {
    const{options,placeholder,label}=this.props;
    return (
      <div className="mb-3">
        <label htmlFor={placeholder} className="form-label fw-bold">
            {label}
        </label>

        <select
            id={placeholder}
            className="form-select"
            value={this.state.value}
            onChange={this.handleChange}
            style={{ backgroundColor: "#f2f2f2" }}
        >
            <option value="">{placeholder}</option>

            {options.map((item, index) => (
            <option key={index} value={item.value}>
                {item.name}
            </option>
            ))}
        </select>
    </div>
    )
  }
}

export default Dropdown