import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <button>
                    <NavLink to="/login">Log In</NavLink>
                </button>
                <button>
                    <NavLink to="/signup">Sign Up</NavLink>
                </button>
            </>
        );
    }

    return (
        <>
            <header className='upperNav'>
                <div className='logo'>
                    YEENIUZ
                </div>
            </header>
            <header className='lowerNav'>
                <div className='lowerNav__div'>
                    <ul>
                        <li>
                            <button>
                                <NavLink to='/songs/add'>Add a Song</NavLink>
                            </button>
                            <button>
                                <NavLink exact to="/">Home</NavLink>
                            </button>
                            {isLoaded && sessionLinks}
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Navigation;
