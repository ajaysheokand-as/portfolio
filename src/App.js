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
import { Report } from "./components/medical/Report";
import { StateProvider } from "./components/medical/Contexts";
import Category from "./components/medical/Category";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <StateProvider>
      <div>
        {/* <authContext.Provider
        value={{ status: authstatus, login: handleOnClick }}
      >
        <Navbar />
        <Auth />
      </authContext.Provider> */}

        <Navbar />
        <Routes>
          <Route path="/" element={<LabHomePg />} />
          <Route path="/context" element={<ContextHome />} />
          <Route exact path="/useMemo" element={<Memo />}></Route>
          <Route exact path="/useState" element={<UseState />}></Route>
          <Route exact path="/useRef" element={<UseRef />}></Route>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/computer" element={<Certificate />} />
          <Route path="/redux" element={<ReduxHome />} />
          <Route path="/lab" element={<LabHomePg />} />
          <Route path="/report" element={<Report />} />
          <Route path="/setting" element={<Category />} />
        </Routes>
      </div>
    </StateProvider>
  );
}

export default App;
