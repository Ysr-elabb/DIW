import React from 'react'
import "./DetailsBar.css"
import DetailItem from '../DetailItem/DetailItem'

const detailItems = [
    {_id: 0, title: "Images", filesCount: 1756, size: 15.3, unit: "GB", type: "IMG"},
    {_id: 1, title: "Documents", filesCount: 123, size: 256, unit: "MB", type: "DOC"},
    {_id: 2, title: "Media Files", filesCount: 24, size: 3.4, unit: "GB", type: "MEDIA"},
    {_id: 3, title: "Other Files", filesCount: 454, size: 3, unit: "GB", type: "OTHER"},
    {_id: 4, title: "Unknown Files", filesCount: 57, size: 175, unit: "MB", type: "UNKNOWN"},
]

export default function DetailsBar() {
    return (
        <div className="d-flex flex-column details-bar-wrapper">
            <div className="details-bar-header">
                <div className="progress-bar-wrapper">
                    <div className="d-flex flex-row justify-content-between progress-bar-values">
                        <div className="d-flex flex-column progress-bar-info">
                            <p className="used-space-value">45.5 GB</p>
                            <p className="used-txt">Used</p>
                        </div>
                        <div className="d-flex flex-column align-items-end progress-bar-info">
                            <p className="capacity-value">50 GB</p>
                            <p className="upgrade-txt">Upgrade</p>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-bar-juice" style={{width:" 50%"}}></div>
                    </div>
                </div>
                <div className="details-wrapper">

                    {detailItems.map(item => <DetailItem key={item._id} item={item} />)}

                    {/* <div className="d-flex flex-row justify-content-between align-items-center detail-item">
                        <div className="d-flex flex-row align-items-center detail-info-wrapper">
                            <div className="d-flex justify-content-center align-items-center detail-icon">
                                <i className="uil uil-image"></i>
                            </div>
                            <div className="detail-info">
                                <h4 className="detail-info-title">Images</h4>
                                <p className="used-txt">1.756 files</p>
                            </div>
                        </div>
                        <div className="detail-value-wrapper">
                            <p className="detail-value">15.3 GB</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
