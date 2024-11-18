import altLogo from '../../assets/kasa-alt-logo.svg'


const Footer = () => {
  return (
    <footer id="footer" className="banner-footer">
      <img src={altLogo} alt="logo kasa"/>
      <p className="copyright">© 2024 Kasa.All rights reserved</p>
    </footer>
  )
}

export default Footer