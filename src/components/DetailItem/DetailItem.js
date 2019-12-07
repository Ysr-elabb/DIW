import React from 'react'
import "./DetailItem.css"
function DetailItem(props) {
    let bgColor= null;
    let icon= null;
    let iconColor= null;

    switch (props.item.type) {
        case "IMG":
            bgColor="#EFEFFD"
            icon= "uil uil-image"
            iconColor= "#6A73FF"
            break;
        case "DOC":
            bgColor="#E7FAF3"
            icon= "uil uil-file"
            iconColor= "#17D092"
            break;
        case "MEDIA":
            bgColor="#FFEFED"
            icon= "uil uil-play"
            iconColor= "#FF6760"
            break;
        case "OTHER":
            bgColor="#FEF8E8"
            icon= "uil uil-file-minus"
            iconColor= "#FDBF00"
            break;
        case "UNKNOWN":
            bgColor="#EFF3FF"
            icon= "uil uil-file-question"
            iconColor= "#6295FE"
            break;
        default:
            break;
    }

    return (
        <div className="d-flex flex-row justify-content-between align-items-center detail-item">
            <div className="d-flex flex-row align-items-center detail-info-wrapper">
                <div className="d-flex justify-content-center align-items-center detail-icon" style={{backgroundColor: bgColor, color: iconColor}}>
                    <i className={icon}></i>
                </div>
                <div className="detail-info">
                    <h4 className="detail-info-title">{props.item.title}</h4>
                    <p className="used-txt">{`${props.item.filesCount} files`}</p>
                </div>
            </div>
            <div className="detail-value-wrapper">
                <p className="detail-value">{`${props.item.size} ${props.item.unit}`}</p>
            </div>
        </div>
    )
}

export default DetailItem

