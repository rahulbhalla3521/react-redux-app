// import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {routes.map((value, index) => {
            return (< Route key={
              index
            }
              path={
                value.path
              }
              exact element={< value.component />} />)
          })}
          <Route> 404 Not Found! </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
