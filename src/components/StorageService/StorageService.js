import React from 'react'
import "./StorageService.css"

function StorageService(props) {

    return (
        <div className="d-flex flex-column justify-content-between service-wrapper">
            <div className="d-flex flex-row justify-content-between service-header">
                <span className="d-flex justify-content-center align-items-center service-icon-wrapper">
                <img src={props.service.image} alt="" />
                </span>
                <a href="#" className="service-more-icon">
                    <i className="uil uil-ellipsis-h"></i>
                </a>
            </div>
            <div className="service-title-wrapper">
                <h4 className="service-title">
                    {props.service.name}
                </h4>
            </div>
            <div className="progress-bar-wrapper">
                <div className="d-flex flex-row justify-content-between progress-bar-values">
                    <p className="used-space-value">{`${props.service.usedValue} GB`}</p>
                    <p className="capacity-value">{`${props.service.capacity} GB`}</p>
                </div>
                <div className="progress-bar">
                    <div className="progress-bar-juice" style={ {width: `${(props.service.usedValue*100) / props.service.capacity}%`} }></div>
                </div>
            </div>
        </div>
    )
}


export default StorageService

