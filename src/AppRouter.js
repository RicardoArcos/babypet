import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './views/HomePage';

export default function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path="/" element= {
                    <HomePage />}
                />
            </Routes>
        </Router>
    )
}