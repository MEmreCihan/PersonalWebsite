import About from "./components/About";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="dark:bg-black/50">
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
