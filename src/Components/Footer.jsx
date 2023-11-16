import { FaFacebookF } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
            <span> About the company</span> Ut congue augue non tellus bibendum,
            in varius tellus condimentum. In scelerisque nibh tortor, sed
            rhoncus odio condimentum in. Sed sed est ut sapien ultrices
            eleifend. Integer tellus est, vehicula eu lectus tincidunt,
            ultricies feugiat leo. Suspendisse tellus elit, pharetra in
            hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante
            sed, viverra massa.
          </p>
          <div className="icons">
            <a href="#">
            <FaFacebookF />
            </a>
          </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span> No. 670 Maruthayathu Building,</span>{" "}
              <span>Lower Karickom, Kottarakara </span> Kollam - 691533
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p> +91 96330 21955</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="#"> sunwaysolarsystems@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h2>
            {" "}
            <span>
              <img
                alt=""
                src="src\assets\sunway_logo_white.png"
                width="149*1.5"
                height="55.5"
                className="d-inline-block align-top"
              />
            </span>
          </h2>
          <p className="menu">
            <a href="#"> Home</a> |<a href="#"> About</a> |
            <a href="#"> Services</a> |<a href="#"> Portfolio</a> |
            <a href="#"> News</a> |<a href="#"> Contact</a>
          </p>
          <p className="name"> Sunway Solar Systems &copy; 2023</p>
        </div>
      </footer>
    </div>
  );
}
<script
  src="https://kit.fontawesome.com/689dd39088.js"
  crossOrigin="anonymous"
></script>;
export default Footer;
