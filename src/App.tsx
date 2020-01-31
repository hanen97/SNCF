import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoginSncf from "./Login/LoginSncf";
import SearchSNCF from "./SearchSNCF";
import UserCard from "./UserCard/UserCard";

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <Router>
            <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
                <a className={"navbar-brand"} href="#">SNCF</a>
                <button className={"navbar-toggler"} type={"button"} data-toggle={"collapse"} data-target={"#navbarNav"}
                        aria-controls={"navbarNav"} aria-expanded={"false"} aria-label={"Toggle navigation"}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse"} id={"navbarNav"}>
                    <ul className={"navbar-nav"}>
                        <li className={"nav-item active"}>
                            <Link to={"/login"}><a className={"nav-link"} href={"#"}>Login <span className={"sr-only"}>(current)</span></a></Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/search"}><a className={"nav-link"} href={"#"}>Search</a></Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/account"}><a className={"nav-link"} href="#">Account</a></Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/login">
                    <LoginSncf loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                </Route>
                <Route exact path="/search">
                    <SearchSNCF />
                </Route>
                <Route exact path="/account">
                    <UserCard loggedIn={loggedIn}/>
                </Route>
            </Switch>
        </Router>
    )
}
