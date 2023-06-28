import React from "react";
import "./tokens/less/dark.less";
import { createRoot } from "react-dom/client";
import {
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from "react-router-dom";
import "./index.less";
import { Provider } from "react-redux";
import store from "./sharedStore";
import Routing from "./Routing";
import LoginImage from "./LoginImage";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://2e35e737ede744f3a023fe55931ae4fd@o4505430885924864.ingest.sentry.io/4505430890643456",
  integrations: [
    new Sentry.BrowserTracing({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes
      ),
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}
const root = createRoot(document.getElementById("app"));
root.render(<App />);
