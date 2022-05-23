import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Init from "./Init";
import ChooseSection from "./ChooseSection";
import ChooseSeats from "./ChooseSeats";
import Success from "./Success";

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Init />} />
                <Route path='/filme/:filmeId' element={<ChooseSection />} />
                <Route path='/assentos/:idSessao' element={<ChooseSeats />} />
                <Route path='/sucesso' element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}