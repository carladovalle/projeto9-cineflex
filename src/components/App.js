import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Init from "./Init";
import ChooseSection from "./ChooseSection";

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