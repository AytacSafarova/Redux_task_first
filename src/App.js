import "./App.css";
import HomePage from "./pages/homePage/homePage";
import { Provider } from "react-redux";
import { Routes, Link, Route } from "react-router-dom";
import CustomerPage from "./pages/customerListPage/customerListPage";
import FavoritesPage from "./pages/favoritesPage/favoritesPage";
import { createStore } from "redux";
import { Reducers } from "./redux/reducers/reducers";
const customerStore = createStore(Reducers);
function App() {
  return (
    <Provider store={customerStore}>
      <HomePage />
      <Routes>
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
