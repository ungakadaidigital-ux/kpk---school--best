import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h4>KPK National Matriculation School</h4>
            <p>
              An English-medium matriculation school in Tiruppur, Tamil
              Nadu, guiding students from Kindergarten through Class X.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/about">About the School</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/news">News &amp; Circulars</Link></li>
            </ul>
          </div>
          <div>
            <h4>Admissions</h4>
            <ul>
              <li><Link to="/admissions">Apply Online</Link></li>
              <li><Link to="/admissions#process">Admission Process</Link></li>
              <li><Link to="/admissions#fees">Fee Enquiry</Link></li>
              <li><Link to="/contact">Contact Office</Link></li>
            </ul>
          </div>
          <div>
            <h4>Visit Us</h4>
            <p>Tiruppur, Tamil Nadu, India</p>
            <p>Mon&ndash;Sat, 9:00 AM &ndash; 4:00 PM</p>
            <p><Link to="/contact">Get directions &rarr;</Link></p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} KPK National Matriculation School. All rights reserved.</span>
          <span>
            <Link to="/privacy">Privacy Policy</Link> &nbsp;&middot;&nbsp;{" "}
            <Link to="/privacy#terms">Terms of Use</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

