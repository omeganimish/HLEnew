import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import "./style.css";
import Blog from "@/components/Blogs";

const BlogPage = () => {
  return (
    <div>
      <Header />
      <Blog pageBlog={true} />
      <Footer />
    </div>
  );
};

export default BlogPage;
