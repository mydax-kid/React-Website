
import './Home.css'
import Button from '../../components/Button/Button.jsx'
import Grid from '../../components/Grid/Grid.jsx'
const Home= () => {

    return(
      <>
        <div className= 'hero-container'>
          <h1 className='home-title'>ADVENTURE AWAITS</h1>
          <p className='home-text'>What are you waiting for?</p>
          <div className= 'hero-btns'>
            <Button name= 'primary' children="Get Started" />
            <Button name= 'special' children="Watch Trailer" />
          </div>
        </div>
        <Grid />
      </>
    )
}

export default Home;