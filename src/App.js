import './App.css';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import all pages
import Home from './Pages/Home/Home.js';
import NewFeature from './Pages/NewFeature/NewFeature.js';
import HomeScreen from './Pages/HomeScreen/HomeScreen.js';
import FTUXPreludeScreen from './Pages/FTUXPreludeScreen/FTUXPreludeScreen.js';

const engine = new Styletron();

function App() {
  return (
    <>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newfeature" element={<NewFeature />} />
              <Route path="/homescreen" element={<HomeScreen />} />
              <Route path="/homescreen" element={<HomeScreen />} />
              <Route path="/ftuxpreludescreen" element={<FTUXPreludeScreen />} />
            </Routes>
          </BrowserRouter>
        </BaseProvider>
      </StyletronProvider>
    </>
  );
}

export default App;
