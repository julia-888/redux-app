import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import "./styles.css";
import { useSelector } from "react-redux";

function App() {
  const page = useSelector((state) => state.page.value);

  return (
    <div className="wrap_app">{page == 1 ? <FirstPage /> : <SecondPage />}</div>
  );
}

export default App;
