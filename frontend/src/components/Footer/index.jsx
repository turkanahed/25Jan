import React from 'react'
import { Container, LeftSide, RightSide } from './style'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="container d-flex justify-content-between">
          <div className="row">
            <div className="col-12">
              <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
              <div className="col-12">
                <form>
                  <input type="text" placeholder=' Your Email' />
                  <button>Send</button>
                </form>
              </div>
            </div>
          </div>
          <div className="row w-50">
            <div className="col-4">
              <h4>About</h4>
              <ul>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Our Partners</a></li>
                <li><a href="/">Our Services</a></li>
              </ul>
            </div>
            <div className="col-4">
              <h4>Contact</h4>
              <ul>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Our Partners</a></li>
                <li><a href="/">Our Services</a></li>
              </ul>
            </div>
            <div className="col-4">
              <h4>Follow Us</h4>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer