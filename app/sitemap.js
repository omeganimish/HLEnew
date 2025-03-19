import { blogData } from "@/lib/blogData";

const siteUrl = "https://healthylifestyleedge.com";

export default function sitemap() {
  const blogs = blogData?.map(({ url, updateDate }) => ({
    url: `${siteUrl}/blogs/${url}`,
    lastModified: new Date(updateDate).toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const routes = ["", "/blogs", "/privacy-policy", "/terms-and-conditions"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    })
  );

  return [...routes, ...blogs];
}
