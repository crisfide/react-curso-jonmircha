import "./modal.css";

const Modal = ({ children, isOpen, close }) => {
  const cerrar = (e) => {
    if (
      e.target.tagName === "ARTICLE" ||
      e.target.className === "modal-close"
    ) {
      close();
    }
  };

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={cerrar}>
      <div className="modal-container">
        <button className="modal-close">❌</button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
