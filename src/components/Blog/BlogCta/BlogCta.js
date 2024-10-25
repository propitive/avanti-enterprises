import ctaImage from "../../../images/main/cta.jpg";

import BookOnlineButton from "../../BookOnlineButton/BookOnlineButton";
import EmailListForm from "../../EmailListForm/EmailListForm";

function BlogCta({ handleOpenModal }) {
  return (
    <div className="blog-cta">
      <div className="blog-cta__container">
        <div className="blog-cta__text-container">
          <h3 className="blog-cta__title">
            There's more where that came from!
          </h3>
          <p className="blog-cta__paragraph">
            Sign-up and get home improvement ideas, best practices, and more in
            your inbox.
          </p>
        </div>
        <EmailListForm
          className="blog-cta__email-list"
          classNameHeader="blog-cta__email-list-header"
          classNameForm="blog-cta__email-list-form"
          handleEmailListModalOpen={handleOpenModal}
        />
      </div>
    </div>
  );
}

export default BlogCta;
