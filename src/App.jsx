import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import AddBlog from "./pages/AddBlog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* 1. Fixed the unclosed Blogs component and Route tag */}
      <Route path="/blogs" element={<Blogs />} />
      {/* 2. Fixed the malformed brackets on the AddBlog component */}
      <Route path="/add-blog" element={<AddBlog />} />
    </Routes>
  );
}

export default App;
