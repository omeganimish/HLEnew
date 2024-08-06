import BlogDetail from "@/components/Blogs/BlogDetail";
import { blogData } from "@/lib/blogData";
import "../style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const posts = blogData;

  return posts.map((post) => ({
    slug: post.url,
  }));
}

export const dynamicParams = false; // true | false,
export const revalidate = 0;
export default function BlogDetailPage({ params }) {
  return (
    <div>
      <Header />
      <BlogDetail url={params.slug.toString()} />
      <Footer />
    </div>
  );
}
