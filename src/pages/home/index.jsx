import React, { PureComponent } from 'react'
import Article from '../../components/article'
import Footer from '../../components/footer'
import Gal1 from '../../components/gallery/gal1'
import Gal2 from '../../components/gallery/gal2'
import Gal3 from '../../components/gallery/gal3'
import Header from '../../components/header'
import Welcome from '../../components/welcome'





class Home extends PureComponent {


      
    state = {
        gallery:'A'
    }
   
    createState = (event) => {
                console.log('clicked')
                  this.setState({
                      gallery:event.target.value
                  })
    }
    
 
    
    gallery = () => {
        if (this.state.gallery === 'A') {
            return <Gal1/>
            } else if (this.state.gallery === 'B') {
            return <Gal2/>
            } else {
                return <Gal3/>
        }
    }
  

   
    


 



    render() {
        return (
            <div>
             <Header />
             <main>
                    <Welcome createState={this.createState} />
                    
             {this.gallery()}
             <Article />
             </main>
             <Footer />
           </div>
         )
    }
}


export default Home
