import React from 'react'
import "./SearchBar.css"
function SearchBar(props) {
    return (
      <div className="col-sm-3 col-md-12 my-1 input-wrapper">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text search-input-icon">
            <i className='uil uil-search search-input-icon'></i>
          </div>
        </div>
        <input type="text" className="form-control search-input" id="search-input" placeholder="Search the files" value={props.value} onChange={props.onChange}/>
        </div>
      </div>
    )
}

export default SearchBar

