import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../Style/Pages/App.css'
import Home from './Home'
import Error from './Error'
import SignIn from './SignIn'
import Dashboard from './Dashboard'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign_in" element={<SignIn />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
