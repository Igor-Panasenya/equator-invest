import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import Blog from "./pages/Blog";
import WhatWeLookFor from "./pages/WhatWeLookFor";
import HowWeHelp from "./pages/HowWeHelp";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import InvestWithUsBanner from "./pages/InvestWithUs";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="who-we-are" element={<WhoWeAre />} />
                <Route path="blog" element={<Blog />} />
                <Route path="what-we-look-for" element={<WhatWeLookFor />} />
                <Route path="how-we-help" element={<HowWeHelp />} />
                <Route path="invest-with-us" element={<InvestWithUsBanner />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
