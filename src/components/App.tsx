import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Reviews } from "./Reviews";
import { Resources } from "./Resources";
import { Services } from "./Services";
import { Introduction } from "./Introduction";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="outer">
        <Sidebar />
        <div className="inner">
          <Introduction />
          <Services />
          <Resources />
          <Reviews />
        </div>
      </div>
    </div>
  );
}
