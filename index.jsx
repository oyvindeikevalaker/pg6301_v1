import * as React from "react";
import ReactDOM from "react-dom";
import {Link, Routes, Route, BrowserRouter} from 'react-router-dom';

function FrontPage() {
    return <div>
        <h1>Kristiania Movie Database</h1>
        <ul>
            <li><Link to="/movies">List movies</Link></li>
            <li><Link to="/movies/new">New Movie</Link></li>
        </ul>
    </div>;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage/>}/>
            <Route path="/movies/new" element={<h1>New Movie</h1>}/>
            <Route path="/movies" element={<h1>List Movies</h1>}/>
        </Routes>
    </BrowserRouter>;
}

// eslint-disable-next-line no-undef
ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);