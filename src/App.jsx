import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex min-h-screen w-full bg-primary-color">
      <Navbar className="md:flex" />
      <Home className="md:ml-[16.6667%] md:w-5/6 md:rounded-l-[25px]" />
    </div>
  );
}

export default App;
