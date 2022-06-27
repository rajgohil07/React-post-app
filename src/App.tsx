import { BrowserRouter } from "react-router-dom";
import { Blog } from "./containers/Blog/Blog";

const App = () => {
  const baseURL =
    process.env.NODE_ENV !== "production" ? "/" : "/React-post-app";
  return (
    <BrowserRouter basename={baseURL}>
      <div className="App">
        <Blog />
      </div>
    </BrowserRouter>
  );
};

export default App;
