import React from 'react'
import "./Category.css"

function Category(props) {
    return (
        <div className="d-flex flex-row category-item">
            <div className="d-flex flex-row align-items-center">
                <i className={`${props.category.icon} category-icon`}></i>
                <p className="category-name">{props.category.name}</p> 
            </div>
            <i className='uil uil-angle-right open-category-icon'></i>
        </div>
    )
}

export default Category

