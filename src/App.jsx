
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/contact" element={<Contact/>}/>
   
      </Route>
   
    </Routes>
    </Router>
  );
}

export default App;
