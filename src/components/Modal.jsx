import React from 'react';

const Modal = ({ close }) => {
  return (
    <div className="z-20 w-full h-screen gap-6 absolute mx-auto flex justify-center items-center flex-col text-white bg-blue-500 font-semibold text-2xl">
      <p>Hello World</p>
      <button onClick={close} className="bg-neutral-800 text-white p-4 rounded-lg">
        Close
      </button>
    </div>
  );
};

export default Modal;
