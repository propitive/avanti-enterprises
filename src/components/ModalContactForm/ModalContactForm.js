// import ModalTemplate from "../ModalTemplate/ModalTemplate";

// function ModalContactForm({ handleCloseModal, isOpen }) {
//   return (
//     <ModalTemplate
//       buttonText={"GO TO HOME"}
//       handleCloseModal={handleCloseModal}
//       isButtonPresent={true}
//       isOpen={isOpen}
//       link={"/"}
//       title={"Thank you!"}
//     >
//       <p className="modal-submit__paragraph">
//         Thank you for reaching out to us, we will reach back out to you as soon
//         as possible!
//       </p>
//     </ModalTemplate>
//   );
// }

// export default ModalContactForm;

import ModalTemplate from "../ModalTemplate/ModalTemplate";

function ModalContactForm({ handleCloseModal, isOpen }) {
  return (
    <ModalTemplate
      isButtonPresent={true}
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      title={"Received, thanks!"}
      buttonText={"Gallery"}
      link={"/gallery"}
    >
      <p className="modal-submit__paragraph">
        Thank you for reaching out to us, we will reach back out to you as soon
        as possible. In the meantime, check out our previous work!
      </p>
    </ModalTemplate>
  );
}

export default ModalContactForm;
