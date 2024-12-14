import logo from '../public/images/logo.svg'
import main from '../public/images/main.jpeg'

import { tourCards, Services, lorem, links, footerIcons } from './Data/data.js'

function App() {
  const nav = ['home', 'about', 'services', 'tours']

  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
            {nav.map((key, index) => {
              return (
                <li key={index}>
                  <a href={`#${key}`} className="nav-link">
                    {key}
                  </a>
                </li>
              )
            })}
          </ul>

          <ul className="nav-icons">
            {footerIcons.map((footericon, index) => {
              const { title, link } = footericon
              return (
                <li key={index}>
                  <a href={link} target="_blank" className="nav-icon">
                    <i className={`fab fa-${title}`}></i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-banner">
          <h1>continue exploring</h1>
          <p>{lorem}</p>
          <a href="#tours" className="btn hero-btn">
            explore tours
          </a>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-title">
          <h2>
            about <span>us</span>
          </h2>
        </div>

        <div className="section-center about-center">
          <div className="about-img">
            <img src={main} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>{lorem}</p>
            <p>{lorem}</p>
            <a href="#" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-title">
          <h2>
            our <span>services</span>
          </h2>
        </div>
        <div className="section-center services-center">
          {Services.map((service, index) => {
            const { heading, description } = service
            return (
              <article className="service" key={index}>
                <span className="service-icon">
                  <i className="fas fa-wallet fa-fw"></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{heading}</h4>
                  <p className="service-text">{description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section" id="tours">
        <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>

        <div className="section-center featured-center">
          {tourCards.map((tourcard, index) => {
            const {
              imgSrc,
              tourDate,
              tourTitle,
              tourTime,
              tourDescription,
              tourDistination,
              tourCost,
            } = tourcard
            return (
              <article className="tour-card" key={index}>
                <div className="tour-img-container">
                  <img src={imgSrc} className="tour-img" alt="" />
                  <p className="tour-date">{tourDate}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{tourTitle}</h4>
                  </div>
                  <p>{tourDescription}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>
                      {tourDistination}
                    </p>
                    <p>{tourTime}</p>
                    <p>{tourCost}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <footer className="section footer">
        <ul className="footer-links">
          {links.map((obj, index) => {
            const { title, link } = obj
            return (
              <li key={index}>
                <a href={link} className="footer-link">
                  {title}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className="footer-icons">
          {footerIcons.map((footericon, index) => {
            const { link, title } = footericon
            return (
              <li key={index}>
                <a href={link} target="_blank" className="footer-icon">
                  <i className={`fab fa-${title}`}></i>
                </a>
              </li>
            )
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  )
}

export default App
