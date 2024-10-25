import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Helmet } from "react-helmet-async";

import { generalBlogs } from "../../../utils/blog/blog";

function GeneralBlog() {
  return (
    <>
      <Helmet>
        <title>Blog | Avanti Enterprises</title>
        <meta
          name="description"
          content="Explore the Avanti Enterprises blog for expert tips on kitchen and bathroom cabinet remodeling in Dallas-Fort Worth. Get design ideas, trends, and home improvement advice."
        />
        <link rel="canonical" href="/blog" />
      </Helmet>

      <div className="general-blog">
        <div className="general-blog__header">
          <h1 className="general-blog__header-title">Blog</h1>
          <h2 className="general-blog__header-subtitle">
            Get up-to-date with the latest and greatest <br /> in the home
            remodeling world!
          </h2>
        </div>
        <div className="general-blog__container">
          {generalBlogs.map((blog) => {
            return (
              <div className="general-blog__card">
                <Link
                  to={blog.link}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div className="general-blog__image-container">
                    <img
                      className="general-blog__image"
                      src={blog.image}
                      alt={blog.alt}
                    />
                  </div>
                </Link>
                <p className="general-blog__date">{blog.date}</p>
                <Link
                  to={blog.link}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    width: "fit-content",
                    margin: "0 auto 0",
                  }}
                >
                  <h2 className="general-blog__title">{blog.title}</h2>
                </Link>

                <h3 className="general-blog__subtitle">{blog.subtitle}</h3>
                <Link
                  to={blog.link}
                  style={{
                    textDecoration: "none",
                    width: "fit-content",
                    margin: "0 auto 0",
                  }}
                >
                  <p className="general-blog__more">Read More</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GeneralBlog;
