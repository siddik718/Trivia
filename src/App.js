import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './comoponents/Home.jsx';
import UploadForm from './comoponents/FileInput.jsx'
import Test from './comoponents/Test';
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="add" element={<UploadForm />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
