import Image from "next/image";

type Blog = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
};

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <>
      <div className="content-section-title">Blogs</div>
      <div className="content-list">
        {blogs.map((blog) => {
          return (
            <div className="content-item" key={blog.id}>
              <div className="content-item__image-container">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill={true}
                  sizes="{(max-width: 768px)"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="content-item__header">
                <div>{blog.title}</div>
                <div>{blog.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogList;
