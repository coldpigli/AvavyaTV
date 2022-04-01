import "./App.css";
import { SideNav } from "./components";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {
  ErrorPage,
  Explore,
  History,
  Home,
  Liked,
  LoginPage,
  MockMan,
  Playlist,
  PlayVideo,
  SignupPage,
  WatchLater,
} from "./pages";

function App() {
  return (
    <div className="App flex">
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/:category" element={<Explore />} />
        <Route path="/video/:videoId" element={<PlayVideo />} />
        <Route path="/history" element={<History />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/mockman" element={<MockMan/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer /> 
    </div>
  );
}

export default App;
