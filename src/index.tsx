import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import AuthenticationProvider from "components/AuthenticationProvider";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./lib/i18n/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// if you want to have a general error handler
// add a toaster to display any error that occurs
// for more details check https://tkdodo.eu/blog/react-query-error-handling
// or add any other general settings here
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log("An error occured");
    },
  }),
  mutationCache: new MutationCache({
    onError: (error, query) => {
      console.log("An error occured");
    },
  }),
});

root.render(
  <React.StrictMode>
    <Suspense fallback="...Loading app">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthenticationProvider>
            <App />
          </AuthenticationProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
