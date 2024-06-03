import React, { useState } from "react";
import { Button, Modal } from "antd";
import Image from "next/image";

const ModalComponent = ({
  title,
  imgUrl2,
  github,
  liveLink,
  frontendTech,
  backendTech,
  description,
  category,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        className="px-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
      >
        Detail
      </Button>
      <Modal
        title="Project Details"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1 className="text-center text-2xl">{title}</h1>
        <div className="flex justify-between mt-2 gap-4">
          <p>
            <span className="font-bold">Github</span>: {github}
          </p>
          <p>
            <span className="font-bold">Live</span>: {liveLink}
          </p>
        </div>

        <div className="flex justify-between mt-2 gap-4">
          <div>
            <p>
              <span className="font-bold">Fronted Tech</span>:
            </p>
            {frontendTech.map((item, i) => (
              <span key={i}>{`${item},`}</span>
            ))}
          </div>
          <div>
            <p>
              <span className="font-bold">Backend Tech</span>:
            </p>
            {backendTech.map((item, i) => (
              <span key={i}>{`${item},`}</span>
            ))}
          </div>
        </div>

        <Image
          src={imgUrl2}
          width={0}
          height={0}
          sizes="100vw"
          alt="image2"
          style={{ width: "100%", height: "auto", marginTop: "10px" }}
        />
        <p className="mt-2 font-bold">Description:</p>
        <p>{description}</p>
      </Modal>
    </>
  );
};

export default ModalComponent;
