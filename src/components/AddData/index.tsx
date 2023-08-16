import React from "react";
import Modal from "@/components/Modal/Modal";

interface Props {
  isOpen: any;
  onUpdate: any;
  onClose: any;
  nameValue: any;
  setName: any;
  emailValue: any;
  setEmail: any;
  genderValue: any;
  setGender: any;
  statusValue: any;
  setStatus: any;
  errorMessage: any;
}

const ModalAddData = ({
  isOpen,
  onUpdate,
  onClose,
  nameValue,
  setName,
  emailValue,
  setEmail,
  genderValue,
  setGender,
  statusValue,
  setStatus,
  errorMessage,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onUpdate={onUpdate} onClose={onClose}>
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-xl font-semibold mb-2">Tambah Data</h1>

        <form>
          <div className="flex flex-col mb-3">
            <p className="text-base text-primary-02 font-semibold">
              Name <span className="text-red-01">*</span>
            </p>

            <input
              className="border"
              type="text"
              name="name"
              required
              value={nameValue || ""}
              placeholder="Abdul Djafar Sidik"
              onChange={setName}
            />
          </div>

          <div className="flex flex-col mb-3">
            <p className="text-base text-primary-02 font-semibold">
              Email <span className="text-red-01">*</span>
            </p>

            <input
              className="border"
              type="text"
              name="email"
              required
              value={emailValue || ""}
              placeholder="sidikabdul2001@gmail.com"
              onChange={setEmail}
            />
          </div>

          <div className="flex flex-col mb-3">
            <p className="text-base text-primary-02 font-semibold">
              Gender <span className="text-red-01">*</span>
            </p>

            <input
              className="border"
              type="text"
              name="gender"
              required
              placeholder="male"
              value={genderValue || ""}
              onChange={setGender}
            />
          </div>

          <div className="flex flex-col mb-3">
            <p className="text-base text-primary-02 font-semibold">
              Status <span className="text-red-01">*</span>
            </p>

            <input
              className="border"
              type="text"
              name="status"
              required
              placeholder="active or inactive"
              value={statusValue || ""}
              onChange={setStatus}
            />
          </div>

          <p className="font-semibold text-red-01">{errorMessage}</p>
        </form>
      </div>
    </Modal>
  );
};

export default ModalAddData;
