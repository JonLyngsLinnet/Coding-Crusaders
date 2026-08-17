import { APITester } from "./APITester";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import {Posts} from "@/posts/Post.tsx";

export function App() {
  return (
    <div className="app">
      <div className="logo-container">
      </div>

      <h1>Welcome to Y!</h1>
      <p>
      </p>
        <Posts />
    </div>
  );
}

export default App;
