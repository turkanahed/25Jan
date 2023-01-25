import React from 'react'
import { EventsContainer } from './style'

const Events = () => {
    return (
        <EventsContainer>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Devoted to wonderful beauty</h3>
                        <h4>Events Pricing</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="card-wrapper">
                            <h5>$16 <span>per table</span></h5>
                            <h6>Birthday Events</h6>
                            <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                            <button>Shop now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card-wrapper">
                            <h5>$31 <span>per table</span></h5>
                            <h6>Wedding Events</h6>
                            <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                            <button>Shop now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card-wrapper">
                            <h5>$52 <span>per table</span></h5>
                            <h6>Party Events</h6>
                            <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                            <button>Shop now</button>
                        </div>
                    </div>
                </div>
            </div>

        </EventsContainer>
    )
}

export default Events