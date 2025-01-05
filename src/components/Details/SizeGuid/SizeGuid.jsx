import { Divider, Modal, Table } from "antd";
import { useState } from "react";
import PropTypes from "prop-types";
import { TbTextResize } from "react-icons/tb";
import "./sizeGuid.scss";

const SizeGuid = ({ dimensions, product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const dataSource = [
    {
      key: "width",
      width: dimensions?.width,
      height: dimensions?.height,
      depth: dimensions?.depth,
    },
  ];
  const columns = [
    {
      title: "Width",
      dataIndex: "width",
      key: "width",
    },
    {
      title: "Heigth",
      dataIndex: "height",
      key: "height",
    },
    {
      title: "Depth",
      dataIndex: "depth",
      key: "depth",
    },
  ];

  return (
    <div>
      <button className="modal-btn" onClick={showModal}>
        <TbTextResize /> Dimensions
      </button>
      <Modal
        title={
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            {product.title}
          </div>
        }
        open={isModalOpen}
        footer={null}
        onCancel={handleOk}
        width={800}
        height={800}
        className="size-guid-modal"
      >
        <Divider />
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          className="size-guid-table"
        />
      </Modal>
    </div>
  );
};
// SizeGuid.propTypes = {
//   dimensions: PropTypes.object,
//   product: PropTypes.object,
// };
export default SizeGuid;
