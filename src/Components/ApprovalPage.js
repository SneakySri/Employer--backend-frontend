import React from 'react'
import { Card } from './Home'
import "./ApprovalPage.css"
import { Nav } from './Nav'

export const Candidate = () => {
    return (
        <div className='candidate-div'>
            <div class="container">
                <div class="row">
                    <div class="col">
                        Username

                    </div>
                    <div class="col">
                        Skills

                    </div>
                    <div className='row'>
                        <div className='col'>
                            Contact number
                        </div>
                        <div className='col'>
                            Email
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            Aadhar Number
                        </div>
                        <div className='col'>
                            DOB
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            College
                        </div>
                        <div className='col'>
                            Qualification
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            Past Employer
                        </div>
                        <div className='col'>
                            Years of Experience
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
class Approval extends React.Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <br />
                <div>
                <div className='main-div'>
                    <div className='card-div'>
                        <Card />
                        
                    </div>

                    <div className='candidate-main'>
                    <Candidate></Candidate>
                    <Candidate></Candidate>
                    <Candidate></Candidate>
                    </div>
                </div>
                </div>
            </div>


        )
    }
}

export default Approval