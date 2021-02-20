import React from 'react'
import img1 from '../../assests/img/gallery/01.jpg'
import img2 from '../../assests/img/gallery/02.jpg'
import img3 from '../../assests/img/gallery/03.jpg'
import img4 from '../../assests/img/gallery/04.jpg'
import img5 from '../../assests/img/gallery/05.jpg'
import img6 from '../../assests/img/gallery/06.jpg'
import img7 from '../../assests/img/gallery/07.jpg'
import img8 from '../../assests/img/gallery/08.jpg'


export default function Gal1() {
    return (
     
            	<div id="tm-gallery-page-pizza" className="tm-gallery-page">
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img1} alt="food" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Fusce dictum finibus</h4>
								<p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p className="tm-gallery-price">$45 / $55</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img2} alt="Food" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Aliquam sagittis</h4>
								<p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p className="tm-gallery-price">$65 / $70</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img3} alt="Food" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Sed varius turpis</h4>
								<p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p className="tm-gallery-price">$30.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img4} alt="Food" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Aliquam sagittis</h4>
								<p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p className="tm-gallery-price">$25.50</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img5} alt="Food" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Maecenas eget justo</h4>
								<p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p className="tm-gallery-price">$80.25</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img6} alt="Food" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Quisque et felis eros</h4>
								<p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p className="tm-gallery-price">$20 / $40 / $60</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img7} alt="Food" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Sed ultricies dui</h4>
								<p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p className="tm-gallery-price">$94</p>
							</figcaption>
						</figure>
					</article>
					<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={img8} alt="Food" className="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 className="tm-gallery-title">Donec porta consequat</h4>
								<p className="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p className="tm-gallery-price">$15</p>
							</figcaption>
						</figure>
					</article>
				</div>
      
    )
}
