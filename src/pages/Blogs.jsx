import { useState } from "react";
import BlogList from "../components/BlogList";

export default function Blogs({ blogs = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const categories = ["All", "React", "JavaScript", "CSS", "Node.js"];

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  }

  function handleSortChange(event) {
    setSortBy(event.target.value);
    setCurrentPage(1);
  }

  // Filter logic
  const filteredBlogs = blogs.filter((blog) => {
    if (selectedCategory === "All") return true;
    return blog.category === selectedCategory;
  });

  // Sort logic
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortBy === "oldest") {
      return new Date(a.date) - new Date(b.date);
    }
    if (sortBy === "az") {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === "za") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  // Pagination calculations
  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const displayedBlogs = sortedBlogs.slice(startIndex, endIndex);

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Our Blogs</h1>
        <p className="mt-2 text-gray-600">
          Filter, sort, and explore our latest blog posts.
        </p>
      </div>

      {/* Filter and Sort Controls */}
      <div className="mb-8 flex flex-col gap-4 rounded-xl bg-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">
            Filter by Category
          </label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">
            Sort Blogs
          </label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>
      </div>

      {/* Blog List Display */}
      {displayedBlogs.length > 0 ? (
        <BlogList blogs={displayedBlogs} />
      ) : (
        <p className="rounded-xl bg-yellow-50 p-6 text-center text-gray-700">
          No blogs found in this category.
        </p>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="rounded-lg bg-gray-900 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`rounded-lg px-4 py-2 ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="rounded-lg bg-gray-900 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}
