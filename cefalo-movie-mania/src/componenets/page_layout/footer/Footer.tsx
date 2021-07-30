import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { Localization } from './Localization';

const Footer: React.FC = () => {
    return (
        <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
            <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                <MDBRow className="mt-3">
                    <MDBCol md="3" lg="4" xl="3" className="mb-4">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>{Localization.companyName}</strong>
                        </h6>
                        <hr
                            className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                            style={{ width: '60px' }}
                        />
                        <p>{Localization.promotionalText}</p>
                    </MDBCol>
                    <MDBCol md="2" lg="2" xl="2" className="mb-4">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>{Localization.theBasics}</strong>
                        </h6>
                        <hr
                            className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                            style={{ width: '60px' }}
                        />
                        <p>
                            <a href="#!">{Localization.about}</a>
                        </p>
                        <p>
                            <a href="#!">{Localization.pressRoom}</a>
                        </p>
                        <p>
                            <a href="#!">{Localization.advertising}</a>
                        </p>
                        <p>
                            <a href="#!">{Localization.jobs}</a>
                        </p>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="mb-4">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>{Localization.community}</strong>
                        </h6>
                        <hr
                            className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                            style={{ width: '60px' }}
                        />
                        <p>
                            <a href="#!">{Localization.guidelines}</a>
                        </p>
                        <p>
                            <a href="#!">{Localization.discussions}</a>
                        </p>
                    </MDBCol>
                    <MDBCol md="4" lg="3" xl="3" className="mb-4">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>{Localization.contact}</strong>
                        </h6>
                        <hr
                            className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                            style={{ width: '60px' }}
                        />
                        <p>
                            <i className="fa fa-home mr-3" /> {Localization.cityCountry}
                        </p>
                        <p>
                            <i className="fa fa-envelope mr-3" /> {Localization.email}
                        </p>
                        <p>
                            <i className="fa fa-phone mr-3" /> {Localization.fbPhoneNumber}
                        </p>
                        <p>
                            <i className="fa fa-print mr-3" /> {Localization.printPhoneNumber}
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="text-center">
                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-fb mx-1">
                            <i className="fab fa-facebook-f"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-tw mx-1">
                            <i className="fab fa-twitter"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-gplus mx-1">
                            <i className="fab fa-google-plus"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-li mx-1">
                            <i className="fab fa-linkedin-in"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-dribbble mx-1">
                            <i className="fab fa-dribbble"> </i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} {Localization.copyright}{' '}
                    <a href="https://www.cefalo.com/en/"> {Localization.companyName}</a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
};

export default Footer;
