import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaStopwatch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useSelector } from 'react-redux';
import { Localization } from './Localization';
import './_navMenuBar.scss';
import { RootState } from '../../../state/store';

const NavMenubar: React.FC = () => {
    const totalAddedWatchedList = useSelector((state: RootState) => state.MovieList.totalAddedWatchList);
    useEffect(() => {
        console.log('Total Added:-', totalAddedWatchedList);
    }, [totalAddedWatchedList]);
    return (
        <div className="custom-navbar">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <h3>{Localization.company}</h3>
                        <p>{Localization.slogan}</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="/watchlist" className="watch-list">
                                <IconContext.Provider value={{ className: 'fa-reg-bookmark' }}>
                                    <div>
                                        <FaStopwatch />
                                    </div>
                                </IconContext.Provider>
                                <span className="watch-list-title">Watchlist</span>
                                {totalAddedWatchedList > 0 && (
                                    <div className="watch-list-counter">{totalAddedWatchedList}</div>
                                )}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenubar;
