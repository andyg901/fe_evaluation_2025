import { BrowserRouter, Route, Routes } from "react-router";
import { RepositoriesPage } from "../repositories/pages/RepositoriesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RepositoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
