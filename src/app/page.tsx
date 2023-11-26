import portfolios from "@/content/portfolios.json";
import blogs from "@/content/blogs.json";

export default function Home() {
  return (
    <>
      <div>hello world</div>
      <div> ------------------ </div>
      <div>{JSON.stringify(portfolios)}</div>
      <div> ------------------ </div>
      <div>{JSON.stringify(blogs)}</div>
    </>
  );
}
