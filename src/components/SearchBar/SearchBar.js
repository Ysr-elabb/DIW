import React from 'react'
import "./SearchBar.css"
function SearchBar(props) {
    return (
        <div className="col-sm-3 col-md-12 my-1">
      <label className="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <div className="input-group">
        <div className="input-group-prepend">
            <div className="input-group-text search-input-icon">
                <i className='uil uil-search search-input-icon'></i>
            </div>
        </div>
        <input type="text" className="form-control-lg search-input" id="search-input" placeholder="Search the files"/>
      </div>
    </div>
    )
}

export default SearchBar

