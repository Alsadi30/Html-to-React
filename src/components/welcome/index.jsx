import React, { PureComponent } from 'react'


class Welcome extends PureComponent {

	
	



	render() {
		return (
			<div>
		
            <header className="row tm-welcome-section">
				<h2 className="col-12 text-center tm-section-title">Welcome to Simple House</h2>
				<p className="col-12 text-center">Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
			</header>
			
			<div className="tm-paging-links">
				<nav>
					<ul>
						<li className="tm-paging-item"><button className="tm-paging-link active" onClick={this.props.createState} value = "A" >Pizza</button></li>
							<li className="tm-paging-item"><button className="tm-paging-link" onClick={this.props.createState}value = "B">Salad</button></li>
						<li className="tm-paging-item"><button className="tm-paging-link" onClick={this.props.createState} value = "C" >Noodle</button></li>
					</ul>
				</nav>
			</div>
            
  
			</div>
		)
	}
}

export default Welcome