import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Init from "./Init";
import ChooseSection from "./ChooseSection";
import ChooseSeats from "./ChooseSeats";

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Init />} />
                <Route path='/filme/:filmeId' element={<ChooseSection />} />
            </Routes>
        </BrowserRouter>
    )
}