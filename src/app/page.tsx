import portfolios from "@/content/portfolios.json";
import blogs from "@/content/blogs.json";
import Image from "next/image";
import BlogList from "@/components/blogs/BlogList";
import PortfolioList from "@/components/portfolios/portfolioList";

export default function Home() {
  return (
    <>
      <div>
        <BlogList blogs={blogs} />
        <PortfolioList portfolios={portfolios} />
      </div>
    </>
  );
}
