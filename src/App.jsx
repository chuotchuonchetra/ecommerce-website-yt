import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
}

export default App;
