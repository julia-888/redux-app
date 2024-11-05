import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import { useSelector } from "react-redux";
import "./input.tailwind.css";

function App() {
  const openedPage = useSelector((state) => state.openedPage.value);

  return (
    <div className="">{openedPage == 1 ? <FirstPage /> : <SecondPage />}</div>
  );
}

export default App;
