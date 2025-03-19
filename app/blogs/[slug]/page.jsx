import BlogDetail from "@/components/Blogs/BlogDetail";
import { blogData } from "@/lib/blogData";
import "../style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound, useRouter } from "next/navigation";

export async function generateMetadata({ params }) {
  const post = blogData.find((post) => post.url === params.slug);

  if (!post) {
    return {
      title:
        "Your Source for Healthy Living Essentials: Nutrition, Fitness, and Wellness",
      description:
        "Discover HLE, your ultimate destination for healthy living essentials. Explore tips on nutrition, fitness, weight loss, and wellness to fuel a balanced lifestyle. Shop top-rated supplements, enjoy nutritious recipes, and embrace a healthier you today.",
    };
  }

  return {
    title: post.metaDes || post.title,
    description: post.metaDes || post.SubDescription,
  };
}

export async function generateStaticParams() {
  const posts = blogData;
  // console.log(
  //   "Generated Static Params:",
  //   posts.map((post) => post.url)
  // );

  return posts.map((post) => ({
    slug: post.url,
  }));
}

// export const dynamicParams = false;
// export const revalidate = 0;
export default function BlogDetailPage({ params }) {
  // console.log(params, "params");

  // const router = useRouter();

  const post = blogData.find((p) => p.url === params.slug);

  if (!post) {
    notFound();
    // return null;
    console.log("not found", post);
    // router.push("/404");
  }

  return (
    <div>
      <Header />
      <BlogDetail url={params.slug.toString()} />
      <Footer />
    </div>
  );
}
