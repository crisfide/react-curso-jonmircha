import "./modal.css";
import ReactDOM from "react-dom";

const ModalPortal = ({ children, isOpen, close }) => {
  const cerrar = (e) => {
    if (
      e.target.tagName === "ARTICLE" ||
      e.target.className === "modal-close"
    ) {
      close();
    }
  };

  return ReactDOM.createPortal(
    <article className={`modal ${isOpen && "is-open"}`} onClick={cerrar}>
      <div className="modal-container">
        <button className="modal-close">❌</button>
        {children}
      </div>
    </article>,
    document.getElementById("modal")
  );
};

export default ModalPortal;
