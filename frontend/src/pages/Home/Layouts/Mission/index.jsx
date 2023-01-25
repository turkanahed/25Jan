import React from 'react'
import { MissionContainer } from './style'

const Mission = () => {
    return (
        <MissionContainer>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="content">
                            <h5>Our Mission</h5>
                            <p>Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.</p>
                            <button>Read more</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="img-wrapper">
                            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </MissionContainer>
    )
}

export default Mission