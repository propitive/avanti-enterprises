import BlogAbout from "../BlogAbout/BlogAbout";
import BlogCta from "../BlogCta/BlogCta";

function Blogs({
  blogAuthor,
  blogCtaParagraph,
  blogCtaTitle,
  blogDate,
  blogSubheaderOne,
  blogSubheaderTwo,
  blogImage,
  blogImageAlt,
  blogsImageParagraph,
  blogImageTitle,
  blogParagraphOne,
  blogParagraphTwo,
  blogTitle,
  handleOpenModal,
}) {
  return (
    <div className="blogs">
      <div className="blogs__container">
        <h1 className="blogs__title">{blogTitle}</h1>
        <p className="blogs__date-author">
          {blogDate} by{" "}
          {blogAuthor === "Jose Maldonado VI" ? (
            <a
              className="blogs__date-author blogs__author-name"
              href="https://www.linkedin.com/in/jose-m-maldonado/"
              target="_blank"
            >
              Jose Maldonado VI
            </a>
          ) : (
            <a
              className="blogs__date-author blogs__author-name"
              href="https://www.facebook.com/xxchemaxx"
              target="_blank"
            >
              Jose "Chema" Maldonado
            </a>
          )}
        </p>
        <div className="blogs__image-container">
          <img className="blogs__image" src={blogImage} alt={blogImageAlt} />
          <div className="blogs__image-text-container">
            <h3 className="blogs__image-title">{blogImageTitle}</h3>
            <p className="blogs__image-paragraph">{blogsImageParagraph}</p>
          </div>
        </div>
        <h2 className="blogs__subheader">{blogSubheaderOne}</h2>
        <p className="blogs__paragraph">{blogParagraphOne}</p>
        <h2 className="blogs__subheader">{blogSubheaderTwo}</h2>
        <p className="blogs__paragraph">{blogParagraphTwo}</p>
        <BlogCta
          blogCtaParagraph={blogCtaParagraph}
          blogCtaTitle={blogCtaTitle}
          handleOpenModal={handleOpenModal}
        />
      </div>
      <BlogAbout />
    </div>
  );
}

export default Blogs;
