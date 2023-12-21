import { Routes, Route } from "react-router-dom";
import { AboutUs } from "./components/pages/AboutUs";
import { ContactUs } from "./components/pages/ContactUs";
import { Memo } from "./components/hooks_code/Memo";
import { ContextHome } from "./components/hooks_code/ContextHome";
import { UseState } from "./components/hooks_code/UseState";
import { UseRef } from "./components/hooks_code/UseRef";
import { Certificate } from "./components/diploma/computer/Certificate";
import { ReduxHome } from "./components/pages/ReduxHome";
import { LabHomePg } from "./components/medical/LabHomePg";
import { StateProvider } from "./components/medical/Contexts";
import Category from "./components/medical/Category";
import { Navbar } from "./components/navbar/Navbar";
import { HartronPracticeSet } from "./components/Tools/Hartron/HartronPracticeSet";
import { PinCode } from "./components/Tools/PinCode/PinCode";
import { Portfolio } from "./components/portfolio/Portfolio";
// import { PinCode } from "./components/Tools/PinCode/PinCode";

function App() {
  const isPortfolioRoute = window.location.pathname === '/' || window.location.pathname === '/learn-more';
  return (
    <StateProvider>
      <div>
        {/* <authContext.Provider
        value={{ status: authstatus, login: handleOnClick }}
      >
        <Navbar />
        <Auth />
      </authContext.Provider> */}

        {isPortfolioRoute ? "" : <Navbar />}
        <Routes>
          <Route path="*" element={<Portfolio/>} />
          <Route path="/" element={<Portfolio />} />
          <Route path="/context" element={<ContextHome />} />
          <Route exact path="/useMemo" element={<Memo />}></Route>
          <Route exact path="/useState" element={<UseState />}></Route>
          <Route exact path="/useRef" element={<UseRef />}></Route>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/iimsd" element={<Certificate />} />
          <Route path="/redux" element={<ReduxHome />} />
          <Route path="/lab" element={<LabHomePg />} />
          <Route path="/setting" element={<Category />} />
          <Route path="/hartron" element={<HartronPracticeSet/>} />
          <Route path="/learn-more" element={<UseState/>} />
          {/* <Route path="/pin-code" element={<PinCode/>} /> */}
          {/* <Route path="/pin-code" element={<PinCode/>} /> */}
          
        </Routes>
      </div>
    </StateProvider>
  );
}

export default App;
