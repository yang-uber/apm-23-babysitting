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
import HomeScreen from './Pages/HomeScreen/HomeScreen.js';
import SelectDateTime from './Pages/SelectDateTime/SelectDateTime.js';
import FTUXPreludeScreen from './Pages/FTUXPreludeScreen/FTUXPreludeScreen.js';
import TCUnagreed from './Pages/TCScreenUnagreed/TCUnagreed.js';
import DescribeHome from './Pages/DescribeHome/DescribeHome';
import TCAgreed from './Pages/TCScreenAgreed/TCAgreed.js';
import TCGeneral from './Pages/TCGeneral/TCGeneral.js';
import ParticipantDetails from './Pages/ChildDetails/ChildDetails';

const engine = new Styletron();

function App() {
  return (
    <>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <BrowserRouter>
            <Routes>              
              <Route path="/" element={<HomeScreen />} />
              <Route path="/datetime" element={<SelectDateTime address="1515 3rd St"/>} />
              <Route path="/describeHome" element={<DescribeHome/>} />
              <Route path="/ftuxpreludescreen" element={<FTUXPreludeScreen />} />
              <Route path="/tcunagreed" element={<TCUnagreed />} />
              <Route path="/tcagreed" element={<TCAgreed />} />
              <Route path="/tcgeneral" element={<TCGeneral />} />
              <Route path="/childdetails" element={<ParticipantDetails />} />
            </Routes>
          </BrowserRouter>
        </BaseProvider>
      </StyletronProvider>
    </>
  );
}

export default App;
