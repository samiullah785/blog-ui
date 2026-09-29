// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import AddBlog from "./pages/AddBlog";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       {/* 1. Fixed the unclosed Blogs component and Route tag */}
//       <Route path="/blogs" element={<Blogs />} />
//       {/* 2. Fixed the malformed brackets on the AddBlog component */}
//       <Route path="/add-blog" element={<AddBlog />} />
//     </Routes>
//   );
// }

// export default App;


import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import AddBlog from "./pages/AddBlog";
import blogsData from "./data/blogs";

function App() {
  const [blogs, setBlogs] = useState(blogsData);

  const addBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs blogs={blogs} />} />
        <Route path="/add-blog" element={<AddBlog addBlog={addBlog} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
