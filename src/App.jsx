import { Headers } from "./components/Header/Headers";
import { Main } from "./pages/main/Main";

function App() {
  return (
    <div>
      <Headers />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
