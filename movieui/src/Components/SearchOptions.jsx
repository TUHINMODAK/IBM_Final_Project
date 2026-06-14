import React, { Component } from 'react'

export class SearchOptions extends Component {
  render() {
    return (
    //   <div className='p-3'>
    //     <form action="" method="post">
    //         <div className='row'>
    //             <div className='col'>

    //         <input type="text" name="name" id="name" placeholder='Search By Name' />
    //             </div>
    //             <div className='col'>

    //         <select name="lang" id="lang">
    //             <option value="">--Select--</option>
    //             <option value="H">Hindi</option>
    //             <option value="E">English</option>
    //             <option value="S">Spanish</option>
    //         </select>
    //             </div>

    //             <div className='col'>

    //         <select name="genre" id="genre">
    //             <option value="">--Select--</option>
    //             <option value="H">Horror</option>
    //             <option value="E">Entertainment</option>
    //             <option value="S">Spiritual</option>
    //         </select>
    //             </div>

    //             <div className='col'>

    //         <select name="genre" id="genre">
    //             <option value="">--Select--</option>
    //             <option value="H">Horror</option>
    //             <option value="E">Entertainment</option>
    //             <option value="S">Spiritual</option>
    //         </select>
    //             </div>
            
    //         </div>
    //     </form>
    //   </div>

    <form className="d-flex align-items-center gap-2 mt-2 mt-lg-0 py-2 px-1">

            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="btn btn-light text-primary fw-semibold" type="submit">
              Search
            </button>

          </form>
    )
  }
}

export default SearchOptions