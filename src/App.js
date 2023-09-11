import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Products } from './Components/Product page/product_page';
import { Details } from './Components/Product page/details';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Products />]}></Route>
          <Route path='/product/:id' element={[<Details />]}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
