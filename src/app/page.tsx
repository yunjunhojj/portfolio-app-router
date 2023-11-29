import BlogList from "@/components/blogs/BlogList";
import PortfolioList from "@/components/portfolios/PortfolioList";

const getBlogs = async () => {
  const response = await fetch("http://localhost:3000/api/blogs");

  if (!response.ok) {
    throw new Error("fetching blogs failed.");
  }

  const data = response.json();
  return data;
};

const getPortfolios = async () => {
  const response = await fetch("http://localhost:3000/api/portfolios");

  if (!response.ok) {
    throw new Error("fetching portfolios failed.");
  }

  const data = response.json();
  return data;
};

export default async function Home() {
  const { data: blogs } = await getBlogs();
  const { data: portfolios } = await getPortfolios();

  return (
    <>
      <div>
        <BlogList blogs={blogs} />
        <PortfolioList portfolios={portfolios} />
      </div>
    </>
  );
}
