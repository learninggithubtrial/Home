import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginImage from "./LoginImage";
//import Dashboard from "./../../PDP/src/Dashboard";
import LoginContainer from "./LoginContainer";
import * as Sentry from "@sentry/react";
import HomeContainer from "./HomeContainer";

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

function Routing() {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <div className="my-10">
        <BrowserRouter>
          <SentryRoutes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            {/* <Route path="/dashboard/:token" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} /> */}
          </SentryRoutes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Sentry.withProfiler(Routing);
