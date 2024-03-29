import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ProfilePage from "./pages/ProfilePage";
import EditExperiencePage from "./pages/EditExperiencePage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobsPage from "./pages/JobsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ProfilePage />} path="/profile" />
          <Route element={<JobsPage />} path="/jobs" />
          <Route element={<EditExperiencePage />} path="/edit" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
