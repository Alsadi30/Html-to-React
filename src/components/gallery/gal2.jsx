import React from 'react'
import img2 from '../../assests/img/gallery/02.jpg'
import img4 from '../../assests/img/gallery/04.jpg'
import img5 from '../../assests/img/gallery/05.jpg'
import img6 from '../../assests/img/gallery/06.jpg'
import img7 from '../../assests/img/gallery/07.jpg'
import img8 from '../../assests/img/gallery/08.jpg'

export default function Gal2() {
    return (
        <div id="tm-gallery-page-salad" className="tm-gallery-page hidden">
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img8} alt="marge" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Salad Menu One</h4>
								<p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p className="tm-gallery-price">$25</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img7} alt="marge" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Second Title Salad</h4>
								<p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p className="tm-gallery-price">$30</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img6} alt="marge" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Third Salad Item</h4>
								<p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p className="tm-gallery-price">$45</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img5} alt="marge" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Superior Salad</h4>
								<p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p className="tm-gallery-price">$50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img4} alt="marge" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Sed ultricies dui</h4>
								<p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p className="tm-gallery-price">$55 / $60</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img2} alt="marge" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Maecenas eget justo</h4>
								<p className="tm-gallery-description">Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique</p>
								<p className="tm-gallery-price">$75</p>
							</figcaption>
						</figure>
					</article>
                    
                    
				</div>
    )
}
