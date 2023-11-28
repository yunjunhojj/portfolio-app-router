import Image from "next/image";

type Portfolio = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
};

const PortfolioList = ({ portfolios }: { portfolios: Portfolio[] }) => {
  return (
    <>
      <div className="content-section-title">Portfolios</div>
      <div className="content-list">
        {portfolios.map((portfolio) => {
          return (
            <div className="content-item" key={portfolio.id}>
              <div className="content-item__image-container">
                <Image
                  src={portfolio.coverImage}
                  alt={portfolio.title}
                  fill={true}
                  sizes="{(max-width: 768px)"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="content-item__header">
                <div>{portfolio.title}</div>
                <div>{portfolio.description}</div>;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PortfolioList;
