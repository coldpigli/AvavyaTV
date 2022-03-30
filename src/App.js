import "./App.css";
import { SideNav } from "./components";
import { Routes, Route } from "react-router-dom";
import {
  ErrorPage,
  Explore,
  History,
  Home,
  Liked,
  Playlist,
  WatchLater,
} from "./pages";

function App() {
  return (
    <div className="App flex">
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/:category" element={<Explore />} />
        <Route path="/history" element={<History />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
