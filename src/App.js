import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import "./styles.css";
import { useSelector } from "react-redux";

function App() {
  const openedPage = useSelector((state) => state.openedPage.value);

  return (
    <div className="app_wrap">
      {openedPage == 1 ? <FirstPage /> : <SecondPage />}
    </div>
  );
}

export default App;
