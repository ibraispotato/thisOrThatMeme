import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './mainPage/mainPage';
import BeforeYouPlay from './game/BeforeYouPlay';
import GameStarted from './gameStarted/GameStarted';
import PhotoEditor from './Photoeditor/photoEditor';
import Numbers from "./numbers/numbers"
import TheEnd from "./finishgame/finishgame"
import { GetContext } from './context/contexts';
function App() {
  return (
    <div >
      <Router>
        <GetContext>
        <Routes>
          <Route path='/thisOrThatMeme' element={<MainPage />} />
          <Route path='/beforeYouPlay' element={<BeforeYouPlay />} />
          <Route path='/beforeYouPlay/gameStarted' element={<GameStarted />} />
            <Route path='/beforeYouPlay/gameStarted/:id' element={<PhotoEditor />} />
          <Route path='/thEnd<3' element={<TheEnd />} />
            

          </Routes>
          </GetContext>
      </Router>
    </div>
  );
}

export default App;
