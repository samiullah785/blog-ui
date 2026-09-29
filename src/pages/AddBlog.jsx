// import Header from "../components/Header";
// import Footer from "../components/Footer";

// function AddBlog() {
//   return (
//     // 1. Added the missing opening React Fragment tag
//     <>
     
      
//       <main className="container mx-auto py-10 px-4">
//         <h2 className="text-3xl font-bold">Add Blog Page</h2>
//       </main>
      
//       {/* 2. Fixed the unclosed Footer tag */}
      
//     </>
//   );
// }

// // 3. Fixed the colon typo after the default export
// export default AddBlog;

import { useState } from "react";

const emptyForm = {
  title: "",
  category: "",
  author: "",
  image: "",
  description: ""
};

function AddBlog({ addBlog }) {
  const [formData, setFormData] = useState(emptyForm);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
    setSuccessMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      author: formData.author,
      image: formData.image,
      description: formData.description
    };
    
    addBlog(newBlog);
    setFormData(emptyForm);
    setSuccessMessage("Blog added successfully! Go to Blogs page to see it.");
  };

  return (
    <main className="px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">Add New Blog</h1>
        <p className="mb-8 text-gray-600">
          Fill this form to add a new blog post to the blog list.
        </p>

        {successMessage && (
          <p className="mb-6 rounded-lg bg-green-100 px-4 py-3 text-green-700">
            {successMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700" htmlFor="title">
              Blog Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700" htmlFor="category">
              Blog Category
            </label>
            <input
              id="category"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Example: React"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700" htmlFor="author">
              Author Name
            </label>
            <input
              id="author"
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700" htmlFor="image">
              Blog Image URL
            </label>
            <input
              id="image"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Paste image URL"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700" htmlFor="description">
              Blog Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a short blog description"
              rows="5"
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Add Blog
          </button>
        </form>
      </div>
    </main>
  );
}

export default AddBlog;
