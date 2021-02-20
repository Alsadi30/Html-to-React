import React from 'react'

import img1 from '../../assests/img/gallery/01.jpg'
import img2 from '../../assests/img/gallery/02.jpg'
import img4 from '../../assests/img/gallery/04.jpg'
import img5 from '../../assests/img/gallery/05.jpg'
import img6 from '../../assests/img/gallery/06.jpg'
import img7 from '../../assests/img/gallery/07.jpg'


export default function Gal3() {
    return (
        
        <div id="tm-gallery-page-noodle" className="tm-gallery-page hidden">
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img2} alt="marge" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Noodle One</h4>
								<p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p className="tm-gallery-price">$12.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img4} alt="marge" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Noodle Second</h4>
								<p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p className="tm-gallery-price">$15.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img5} alt="marge" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Third Soft Noodle</h4>
								<p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p className="tm-gallery-price">$20.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img6} alt="marge" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Aliquam sagittis</h4>
								<p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p className="tm-gallery-price">$30.25</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img7} alt="marge" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Maecenas eget justo</h4>
								<p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p className="tm-gallery-price">$35.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img1} alt="marge" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Quisque et felis eros</h4>
								<p className="tm-gallery-description">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<p className="tm-gallery-price">$40.50</p>
							</figcaption>
						</figure>
					</article>

				</div>
    )
}
