import Header from "../components/Header";
import Footer from "../components/Footer";

function AddBlog() {
  return (
    // 1. Added the missing opening React Fragment tag
    <>
      <Header />
      
      <main className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold">Add Blog Page</h2>
      </main>
      
      {/* 2. Fixed the unclosed Footer tag */}
      <Footer />
    </>
  );
}

// 3. Fixed the colon typo after the default export
export default AddBlog;
