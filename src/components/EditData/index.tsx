import React from "react";
import Modal from "@/components/Modal/Modal";
import { BlogState } from "@/services/Blog/state";

interface Props {
  isOpen: any;
  onUpdate: any;
  onClose: any;
  dataUser: any;
  temp: any;
  setTemp: any;
}

const ModalEditData = ({
  isOpen,
  onUpdate,
  onClose,
  dataUser,
  temp,
  setTemp,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onUpdate={onUpdate} onClose={onClose}>
      {dataUser ? (
        <div className="">
          <h1 className="text-xl font-semibold mb-2">
            Edit Data: {dataUser.id}
          </h1>

          <div className="flex flex-col gap-3 mb-5">
            <div>
              <p className="text-base text-primary-02 font-semibold">Name</p>

              <input
                type="text"
                name="name"
                value={temp.name}
                onChange={(e) =>
                  setTemp({
                    ...temp,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <p className="text-base text-primary-02 font-semibold">Email</p>

              <input
                type="text"
                name="email"
                value={temp.email}
                onChange={(e) =>
                  setTemp({
                    ...temp,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <p className="text-base text-primary-02 font-semibold">Gender</p>

              <input
                type="text"
                name="gender"
                value={temp.gender}
                onChange={(e) =>
                  setTemp({
                    ...temp,
                    gender: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <p className="text-base text-primary-02 font-semibold">Status</p>

              <input
                type="text"
                name="status"
                value={temp.status}
                onChange={(e) =>
                  setTemp({
                    ...temp,
                    status: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  );
};

export default ModalEditData;
