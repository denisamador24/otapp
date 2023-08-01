import './footer.css'

const Foter = () => {
  return (
    <footer>
      <div className='footer__links'>
        <div className='footer__links-border'></div>
        <nav>
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100093854167295">
                <img src="/images/facebook-icon.png" alt="Facebook Logo" />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@ometepetursticaap">
                <img src="/images/tiktok-icon.png" alt="Tiktok Logo" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/otapp2023/">
                <img src="/images/instagram-icon.png" alt="Instagram Logo" />
              </a>
            </li>
          </ul>
        </nav>
        <div className='footer__links-border'></div>
      </div>
      <div className='footer__logo'>
        <figure>
          <img src="/logo.png" alt="Logo" />
        </figure>
        <p>OTAPP</p>
      </div>
    </footer>
  )
}

export default Foter