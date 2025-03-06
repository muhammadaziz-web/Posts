import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import placesData from "./data.json";
import { lazy, Suspense } from "react";
import PlaceCards from './Components/PlaceCards/PlaceCards';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PlaceCards />} />
          {placesData.map((place) => {
            const Component = lazy(() => import(`./Components/Place/${place.component}.jsx`));
            return (
              <Route
                key={place.id}
                path={place.path}
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;