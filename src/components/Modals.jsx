import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import CrudApi from "./CrudApi";
import CurdApp from "./CurdApp";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";
import SelectAnidados from "./SelectAnidados";
import SongSearch from "./SongSearch";

const Modals = () => {
  const [isOpen1, open1, close1] = useModal();
  const [isOpen2, open2, close2] = useModal();
  const [isOpen3, open3, close3] = useModal();
  const [isOpen4, open4, close4] = useModal();
  const [isOpen5, open5, close5] = useModal();

  const [isOpenPortal, openPortal, closePortal] = useModal();

  return (
    <div>
      <button onClick={open1}>Modal 1</button>
      <Modal isOpen={isOpen1} close={close1}>
        <h3>soy el modal 1</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
          debitis, facere nihil provident laboriosam voluptatem praesentium,
          odio quam deserunt, est quidem aliquid. Culpa beatae ullam ea repellat
          eius quod suscipit.
        </p>
      </Modal>

      <button onClick={open2}>Modal 2</button>
      <Modal isOpen={isOpen2} close={close2}>
        <ContactForm />
      </Modal>

      <button onClick={open3}>Modal 3</button>
      <Modal isOpen={isOpen3} close={close3}>
        <CurdApp />
      </Modal>

      <button onClick={open4}>Modal 4</button>
      <Modal isOpen={isOpen4} close={close4}>
        <SongSearch />
      </Modal>

      <button onClick={open5}>Modal 5</button>
      <Modal isOpen={isOpen5} close={close5}>
        <SelectAnidados />
      </Modal>

      <button onClick={openPortal}>Modal portal</button>
      <ModalPortal isOpen={isOpenPortal} close={closePortal}>
        <h3>Modal en portal</h3>
        <p>
          Cargo desde otro nodo, distinto del <code>div id=root</code>
        </p>
      </ModalPortal>
    </div>
  );
};

export default Modals;
