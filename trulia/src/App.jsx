import { lazy, Suspense } from "react";
import "./App.css";

const Body = lazy(() => import("./components/body/Body"));

const Header = lazy(() => import("./components/header/Header"));

function App() {
  return (
    <div className="app-container">
      <Suspense fallback={"Loading..........."}>
        <Header />
      </Suspense>

      <Suspense fallback={"Loading............."}>
        <Body />
      </Suspense>
    </div>
  );
}

export default App;
