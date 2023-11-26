import ModalTemplate from "../ModalTemplate/ModalTemplate";

function ModalContactForm({ handleCloseModal, isOpen }) {
  return (
    <ModalTemplate
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      title={"Thank you!"}
      buttonText={"GO TO HOME"}
      link={"/"}
    >
      <p className="modal-submit__paragraph">
        Thank you for reaching out to us, we will reach back out to you as soon
        as possible!
      </p>
    </ModalTemplate>
  );
}

export default ModalContactForm;
