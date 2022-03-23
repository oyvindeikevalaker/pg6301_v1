import * as React from "react";
import ReactDOM from "react-dom";
import {Link, Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom';
import {useState} from "react";

const MOVIES = [
    {
        title: "The Matrix",
        plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        year: "1999"
    },
    {
        title: "The Color Purple",
        plot: "A black Southern woman struggles to find her identity after suffering years of abuse from her father and others over 40 years.",
        year: "1985"
    }
]


function FrontPage() {
    return <div>
        <h1>Kristiania Movie Database</h1>
        <ul>
            <li><Link to="/movies">List movies</Link></li>
            <li><Link to="/movies/new">New Movie</Link></li>
        </ul>
    </div>;
}

function ListMovies() {
    return <div>
        <h1>List Movies</h1>
        {MOVIES.map(m =>
            <div key={m.title}>
                <h2>{m.title} ({m.year})</h2>
                <div>{m.plot}</div>
            </div>
        )}
    </div>;
}

function AddMovie({onAddMovie}) {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        onAddMovie({title, year, plot});
        navigate("/");
    }

    return <form onSubmit={handleSubmit}>
        <h1>New Movie</h1>
        <div>
            <label>Title: <input value={title} onChange={e => setTitle(e.target.value)}/></label>
        </div>
        <div>
            <label>Year: <input value={year} onChange={e => setYear(e.target.value)}/></label>
        </div>
        <div>
            <label>Plot: <textarea value={plot} onChange={e => setPlot(e.target.value)}/></label>
        </div>
        <button>Submit</button>
    </form>;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage/>}/>
            <Route path="/movies" element={<ListMovies/>}/>
            <Route path="/movies/new" element={<AddMovie onAddMovie={m => MOVIES.push(m)}/>}/>
        </Routes>
    </BrowserRouter>;
}

// eslint-disable-next-line no-undef
ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);