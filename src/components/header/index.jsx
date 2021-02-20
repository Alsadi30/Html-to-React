import React from 'react'
// import house from '../../assests/img/simple-house-01.jpg'
import logo from '../../assests/img/simple-house-logo.png'

export default function Header() {
    return (
        <div>
            <div className="placeholder">
			<div className="parallax-window" data-parallax="scroll"  >
				<div className="tm-header">
					<div className="row tm-header-inner">
						<div className="col-md-6 col-12">
							<img src={logo} alt="Logo" className="tm-site-logo" /> 
							<div className="tm-site-text-box">
								<h1 className="tm-site-title">Simple House</h1>
								<h6 className="tm-site-description">new restaurant template</h6>	
							</div>
						</div>
						<nav className="col-md-6 col-12 tm-nav">
							<ul className="tm-nav-ul">
								<li className="tm-nav-li"><a href="/" className="tm-nav-link">Home</a></li>
								<li className="tm-nav-li"><a href="/about" className="tm-nav-link ">About</a></li>
								<li className="tm-nav-li"><a href="/contact" className="tm-nav-link">Contact</a></li>
							</ul>
						</nav>	
					</div>
				</div>
			</div>
		 </div>
        </div>
    )
}
