import './App.css';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import React, { useState } from 'react';

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
import AddNewChild from './Pages/AddNewChild/AddNewChild';
import Review from './Pages/ReviewScreen/Review.js';
import Confirmation from './Pages/ConfirmationScreen/Confirmation.js'
import Activity from './Pages/ActivityHub/Activity.js';
import Reservation from './Pages/ReservationScreen/Reservation.js';
import ArrivingNow from './Pages/ArrivingNow/ArrivingNow.js'
import TaskStarted from './Pages/TaskStarted/TaskStarted.js';
import InProgress from './Pages/InProgress/InProgress';
import Remaining30 from './Pages/Remaining30/Remaining30';
import Remaining15 from './Pages/Remaining15/Remaining15';
import Remaining15b from './Pages/Remaining15b/Remaining15b';
import RateTip from './Pages/RateTipScreen/RateTip';
import LocationDetails from './Pages/LocationDetails/LocationDetails';
import LocationSelect from './Pages/LocationSelect/LocationSelect';

import ChildDetails2 from './Pages/ChildDetails_2/ChildDetails_2'
import ChildDetails3 from './Pages/ChildDetails_3/ChildDetails_3'

import NewFeature from './Pages/[DEPRECATED] NewFeature/NewFeature';

const engine = new Styletron();

function App() {
  const [curAddress, setCurAddress] = useState("1515 3rd St");
  const [startTime, setStartTime] = useState("4:00PM");
  const [endTime, setEndTime] = useState("5:00PM");
  const [houseDesc, setHouseDesc] = useState("Brown Edwardian");
  const [address2, setAddress2] = useState("Apartment 4");

  return (
    <>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <BrowserRouter>
            <Routes>              
              <Route path="/" element={<HomeScreen address={curAddress}/>} />
              <Route path="/datetime" element={<SelectDateTime address={curAddress} setStartTime={setStartTime} setEndTime={setEndTime}/>} />
              <Route path="/describeHome" element={<DescribeHome setHouseDesc={setHouseDesc}/>} />
              <Route path="/ftuxpreludescreen" element={<FTUXPreludeScreen />} />
              <Route path="/tcunagreed" element={<TCUnagreed />} />
              <Route path="/tcagreed" element={<TCAgreed />} />
              <Route path="/tcgeneral" element={<TCGeneral />} />
              <Route path="/childdetails" element={<ParticipantDetails />} />
              <Route path="/addKid" element={<AddNewChild />} />
              <Route path="/review" element={<Review 
                address={curAddress} startTime={startTime} endTime={endTime}
                homeDesc={houseDesc} kidsDesc={"Yang and Dominic"}
                address2={address2}
                />} />
              <Route path="/confirmation" element={<Confirmation 
              address={curAddress} startTime={startTime} endTime={endTime}
              homeDesc={houseDesc} kidsDesc={"Yang and Dominic"}
              address2={address2}
              />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/arrivingnow" element={<ArrivingNow />} />
              <Route path="/taskstarted" element={<TaskStarted />} />
              <Route path="/inprogress" element={<InProgress />} />
              <Route path="/remaining30" element={<Remaining30 />} />
              <Route path="/remaining15" element={<Remaining15 />} />
              <Route path="/remaining15b" element={<Remaining15b />} />
              <Route path="/ratetip" element={<RateTip />} />
              <Route path="/locationDetails" element={<LocationDetails address={curAddress} setAddress2={setAddress2}/>}/>
              <Route path="/locationSelect" element={<LocationSelect address={curAddress} setAddress={setCurAddress}/>}/>
              <Route path="/childdetails2" element={<ChildDetails2 />} />
              <Route path="/childdetails3" element={<ChildDetails3 />} />
              <Route path="/newfeature" element={<NewFeature />} />

            </Routes>
          </BrowserRouter>
        </BaseProvider>
      </StyletronProvider>
    </>
  );
}

export default App;
