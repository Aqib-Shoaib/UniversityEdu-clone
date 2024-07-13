import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import Elements from "./Pages/Elements";
import Programs from "./Pages/Programs";
import AppLayout from "./Layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetials" element={<BlogDetails />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/programs" element={<Programs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
