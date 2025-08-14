import React from 'react'
import './Education.css'

const Education = () => {
    return (
        <div className='education' id='education'>
            <div className="education-title">
                <h1>Education</h1>
            </div>
            <div className="education-details">
                <div className="education-contents">
                    <div className="education-box">
                        <h4>2023-2026</h4>
                        <h3>Bachelor of Computer Applications</h3>
                        <h4>Dr. D. Y. Patil Agricultural & Technical University, Talsande</h4>
                        <p>Completed 2nd year with CGPA of <i>8.73/10</i></p>
                    </div>

                    <div className="education-box">
                        <h4>2022-2023</h4>
                        <h3>Higher Secondary Certificate (HSC) - Science</h3>
                        <h4>New English School & jr. College of Science, Shirala</h4>
                        <p>PERCENTAGE : 65%.</p>
                    </div>

                    <div className="education-box">
                        <h4>2020-2021</h4>
                        <h3>Secondary School Certificate (SSC)</h3>
                        <h4>New English School & jr. College of Science, Shirala</h4>
                        <p>PERCENTAGE : 80%.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Education;