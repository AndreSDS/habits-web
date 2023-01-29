interface ModalProps {
  isModalOpen: boolean;
  showModal: () => void;
}

export const Modal = ({ isModalOpen, showModal }: ModalProps) => {
  
    function handleCloseModal() {
        
    }
  
    if (!isModalOpen) return null;

  return (
    <div>
      <button onClick={showModal}>closeModal</button>
      <h1>Hello modal</h1>
    </div>
  );
};
