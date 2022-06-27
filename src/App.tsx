import { BrowserRouter } from "react-router-dom";
import { Blog } from "./containers/Blog/Blog";

const App = () => {
  const baseURL =
    process.env.NODE_ENV !== "production" ? "/" : "/React-post-app";
  console.log(baseURL);
  console.log("process.env.NODE_ENV :>> ", process.env.NODE_ENV);
  return (
    <BrowserRouter basename={baseURL}>
      <div className="App">
        <Blog />
      </div>
    </BrowserRouter>
  );
};

export default App;
