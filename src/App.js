import { useState } from "react";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";


function App() {
  const [page, setPage] = useState(1);

  return (
    // style={{ backgroundColor: "#234324", height: '100vh' }}
    <div>
      {page == 1 ? <FirstPage /> : <SecondPage />}
    </div>
  );
}

export default App;
