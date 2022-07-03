import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Store from "./components/posts/post-store";
import { Provider } from "react-redux";
const Posts = React.lazy(() => import("./components/posts/posts"));

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Provider store={Store}>
            <Suspense fallback={<div>Loading...</div>}>
              <Posts />
            </Suspense>
          </Provider>
        </Route>
      </Router>
    </div>
  );
};

export default App;
