import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PublicationList from "./pages/Publication/PublicationList";
import PublicationDetails from "./pages/Publication/PublicationDetails";
import PublicationEdit from "./pages/Publication/PublicationEdit";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publication" element={<PublicationList />} />
        <Route
          path="/publication/:id/details"
          element={<PublicationDetails />}
        />
        <Route path="/publication/:id/edit" element={<PublicationEdit />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
