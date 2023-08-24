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
import Review from './Pages/ReviewScreen/Review.js';
import Confirmation from './Pages/ConfirmationScreen/Confirmation.js'
import Activity from './Pages/ActivityHub/Activity';
import Reservation from './Pages/ReservationScreen/Reservation';

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
              <Route path="/review" element={<Review />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/reservation" element={<Reservation />} />
            </Routes>
          </BrowserRouter>
        </BaseProvider>
      </StyletronProvider>
    </>
  );
}

export default App;
