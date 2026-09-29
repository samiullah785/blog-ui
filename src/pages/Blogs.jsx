// import Header from "../components/Header";
// // 1. Added quotes around the Footer import path
// import Footer from "../components/Footer";

// function Blogs() {
//   return (
//     // 2. Added an opening React Fragment to wrap multiple sibling elements
//     <>
//       {/* 3. Fixed unclosed Header tag */}
//       <Header />
      
//       <main className="container mx-auto py-10 px-4">
//         <h2 className="text-3xl font-bold">Blogs Page</h2>
//       </main>
      
//       {/* 4. Fixed unclosed Footer tag and added closing Fragment */}
//       <Footer />
//     </>
//   );
// }

// export default Blogs;


// import BlogList from "../components/BlogList";
// import { blogs } from "../data/blogs";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// export default function Blogs() {
//   return (
//     <>
    
//       <main className="bg-gray-50 min-h-screen">
//         <section className="max-w-6xl mx-auto px-6 py-14">
//           <div className="text-center mb-10">
//             <p className="text-blue-600 font-semibold mb-2">Our Blogs</p>
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Latest Articles
//             </h1>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Read beginner-friendly articles about React, components, props,
//               routing, and clean user interface design.
//             </p>
//           </div>

//           <BlogList blogs={blogs} />
//         </section>
//       </main>
     
//     </>
//   );
// }


import BlogList from "../components/BlogList";

function Blogs({ blogs }) {
  return (
    <main className="px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">All Blogs</h1>
        <p className="mb-8 text-gray-600">
          Read the latest blog posts added to our website.
        </p>
        <BlogList blogs={blogs} />
      </div>
    </main>
  );
}

export default Blogs;
