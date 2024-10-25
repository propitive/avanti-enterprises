import facebook from "../../../images/icons/facebook.png";
import instagram from "../../../images/icons/instagram.png";

function BlogAbout() {
  return (
    <section className="blog-about">
      <div className="blog-about__container">
        <p className="blog-about__text">
          At <em>Avanti Enterprises</em>, our mission is to help you take pride
          in every corner of your home. We believe you deserve a space you love,
          and we’re here to provide expert design ideas, the latest trends, and
          practical home improvement tips to make that a reality.
        </p>
      </div>
      <div className="blog-about__container">
        <div className="blog-about__logo-container">
          <img className="blog-about__logo" src={facebook} />
          <p className="blog-about__logo-text facebook">
            <a
              className="blog-about__logo-text facebook"
              href="https://www.facebook.com/profile.php?id=61558335383713"
              target="_blank"
            >
              Facebook
            </a>
          </p>
        </div>
        <div className="blog-about__logo-container">
          <img className="blog-about__logo" src={instagram} />
          <p className="blog-about__logo-text instagram">
            <a
              className="blog-about__logo-text instagram"
              href="https://www.instagram.com/avanti.enterprises/"
              target="_blank"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default BlogAbout;
