import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Article from "./pages/Article";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Homepage />}/>
          <Route path='/:id' element={<Article/>} />
        </Routes>
    </BrowserRouter>
  )
}
  
export default App;
