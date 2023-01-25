import React from 'react'
import { TeamContainer } from './style'

const Team = () => {
    return (
        <TeamContainer>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Contacts</h3>
                        <h4>Our Team</h4>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4">
                        <div className="card-wrapper">
                            <div className="img-wrapper">
                                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <h5>Velva Kopf</h5>
                                <h6>Biologist</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card-wrapper">
                            <div className="img-wrapper">
                                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <h5>Sarah Palmer</h5>
                                <h6>Florist</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card-wrapper">
                            <div className="img-wrapper">
                                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <h5>Jessica Swift</h5>
                                <h6>Photographer</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TeamContainer>
    )
}

export default Team