import './App.css';
import {
  useLocation, Route, Routes, Navigate,
} from 'react-router-dom';
import ProductList from './components/ProductList/index';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';
import Contextbutton from './components/ContextButton/ContextButton';

import { UserProvider } from "./contexts/User"


// const location = useLocation();

// useEffect(
//   () => {
//     console.log('on veut scroller !');
//     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//   },
//   [location],
// );


function App() {
  return (
    <UserProvider>
      <div className="App">

        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">

              <Routes>

                <Route path="/" element={<ProductList />} />
                <Route path="/add" element={<AddProduct />} />
                <Route path="/edit/:id" element={<EditProduct />} />

              </Routes>

              <Contextbutton/>

            </div>
          </div>
        </div>

      </div>
    </UserProvider>
  );
}


export default App;
