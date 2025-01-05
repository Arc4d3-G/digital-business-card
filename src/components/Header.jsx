import headshot from '../assets/headshot.webp'

export default function Header() {

    return (
      <div className='header'>
        <img className='headshot' src={headshot} alt="Dewald Breed" />
        <div className='header--body'>
          <h1>Dewald Breed</h1>
          <h3>Junior Software Developer</h3>
          <p>dewaldbreed@gmail.com</p>
          <div className='header--buttons'>
          <a href="mailto:dewaldbreed@gmail.com"><button className='btn--email'>Email</button></a>
          {/* <a href="https://www.linkedin.com/in/dewald-breed-a2297a272/" target="_blank"><button className='btn--linkedin'>LinkedIn</button></a> */}
          </div>
        </div>
      </div>
    )
  }