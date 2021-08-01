import React from 'react';
import './_footer.scss';

const Footer: React.FC = () => {
    return (
        <footer>
            {' '}
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li>
                                <a href="#">Web design</a>
                            </li>
                            <li>
                                <a href="#">Development</a>
                            </li>
                            <li>
                                <a href="#">Hosting</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li>
                                <a href="#">Company</a>
                            </li>
                            <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Cefalo Movie Mania FE Assignment</h3>
                        <p>Greates Movie and TV Shows site all over the world.</p>
                    </div>
                    <div className="col item social">
                        <a href="#">
                            <i className="icon ion-social-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="icon ion-social-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="icon ion-social-snapchat"></i>
                        </a>
                        <a href="#">
                            <i className="icon ion-social-instagram"></i>
                        </a>
                    </div>
                </div>
                <p className="copyright">CEFALO Movie Mania-Web Development Assignment © 2021 </p>
            </div>{' '}
        </footer>
    );
};

export default Footer;
