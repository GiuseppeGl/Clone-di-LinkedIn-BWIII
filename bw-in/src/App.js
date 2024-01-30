import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ProfilePage from "./pages/ProfilePage";
import EditExperiencePage from "./pages/EditExperiencePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobsPage from "./pages/JobsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route element={<ProfilePage />} path="/" />
          <Route element={<EditExperiencePage />} path="/edit" />
          <Route element={<JobsPage></JobsPage>} path="/jobs" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
