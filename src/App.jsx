import "./App.css";
import Card from "./components/Card";
import Quiz from "./components/Quiz";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Card>
          <Quiz />
        </Card>
      </GlobalProvider>
    </div>
  );
}

export default App;
