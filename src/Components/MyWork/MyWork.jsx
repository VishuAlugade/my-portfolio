import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
const MyWork = () => {
    return (
        <div className='mywork' id='projects'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
        </div>
    )
}

export default MyWork