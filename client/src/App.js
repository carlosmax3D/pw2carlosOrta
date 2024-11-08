import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx"
import Test from "./pages/Test.jsx"
import Mount from "./pages/Mount.jsx"
import Umount from "./pages/Umount.jsx"
import Counter from "./pages/hookCounter.jsx"
import CheckLogin from "./pages/hookLogin.jsx"
import FormsComponent from "./pages/formExamples.jsx";
import MaterialUIPage from "./pages/MaterialUI.jsx"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/test" element={<Test/>}/>
      <Route path="/mount" element={<Mount/>}/>
      <Route path="/umount" element={<Umount/>}/>
      <Route path="/hookCounter" element={<Counter/>}/>
      <Route path="/checkLogin" element={<CheckLogin/>}/>
      <Route path="/forms" element={<FormsComponent/>}/>
      <Route path="/material" element={<MaterialUIPage/>}/>
    </Routes>
  );
}

export default App;
