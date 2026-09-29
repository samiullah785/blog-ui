

// 1. Added these imports assuming your components are in the same directory
import Header from "../components/Header";
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

function Home() {
  return (
    // 2. Added the missing opening fragment tag (<>) to wrap sibling elements
    <>
      
      <Hero />
      
      {/* 3. Fixed the duplicate double bracket "<<main" */}
      <main className="container mx-auto px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <BlogCard
            title="Learning React"
            description="React makes building user interfaces simple."
          />
          {/* 4. Fixed the missing closing quote on the title prop */}
          <BlogCard
            title="Understanding Props"
            description="Props allow us to pass data."
          />
          <BlogCard
            title="Tailwind CSS"
            description="Tailwind helps build modern interfaces."
          />
        </div>
      </main>
      
      {/* 5. Fixed the unclosed Footer tag */}
      
    </>
  );
}

export default Home;
