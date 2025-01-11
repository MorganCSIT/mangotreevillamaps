import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import MapRoute from "./components/MapRoute/MapRoute";
import TaxiServicePage from "./components/TaxiService/TaxiServicePage";
import BlogList from "./components/Blog/BlogList";
import BlogPost from "./components/Blog/BlogPost";
import EssentialInfo from "./components/EssentialInfo/EssentialInfo";
import FAQ from "./components/FAQ/FAQ";
import Activities from "./components/Activities/Activities";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/essential-info" replace />}
            />
            <Route path="/map/:mapId" element={<MapRoute />} />
            <Route path="/taxi-service/*" element={<TaxiServicePage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/essential-info" element={<EssentialInfo />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
