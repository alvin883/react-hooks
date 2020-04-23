import React from 'react';
import { useOnClickOutside } from 'react-hooks';

const MyApp = () => {
  const modalRef = useRef();
  const [isModalOpen, setModalOpen] = useState(true);

  useOnClickOutside(modalRef, () => setModalOpen(false));

  return (
    <div>
      {isModalOpen && (
        <div ref={modalRef}>This is modal. Click outside to close</div>
      )}
      <button onClick={() => setModalOpen(true)}>Open modal</button>
    </div>
  );
};

export default MyApp;
