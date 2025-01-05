import { Divider, Modal, Table, Flex } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import PropTypes from "prop-types";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


const ReadReviews = ({ reviews, product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

   useEffect(() => {
    if (Array.isArray(reviews)) {
      const reviewsData = reviews.map((review, index) => ({
        key: index,
        rating: (
          <span style={{display: "flex",gap:"4px", color: "#FFB14B"}} >
            {Array.from({ length: 5 }, (_, index) => {
                
              return (
                <React.Fragment key={index}>
                  {review.rating >= index + 1 ? (
                    <FaStar key={index} />
                  ) : review.rating >= index + 0.5 ? (
                    <FaStarHalf key={index} />
                  ) : (
                    <AiOutlineStar key={index} />
                  )}
                </React.Fragment>
              );
            })}
          </span>
        ),
        comment: review.comment,
        date: formatDate(review.date),
        name: review.reviewerName,
        email: review.reviewerEmail,
      }));
      setDataSource(reviewsData);
    
    }
  }, [reviews]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Rating",
      dataIndex: "rating",
    },
    {
      title: "Comment",
      dataIndex: "comment",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  return (
    <div>
      <Flex justify="center" align="center" gap={8} onClick={showModal}>
        <MdMarkUnreadChatAlt /> Read reviews (1)
      </Flex>
      <Modal
        title={
          <div style={{ textAlign: "center", fontWeight: "bold" }}>{product.title}</div>
        }
        open={isModalOpen}
        footer={null}
        onCancel={handleOk}
        width={1000}
        height={1000}
        className="size-guid-modal"
      >
        <Divider />
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </Modal>
    </div>
  );
};

// ReadReviews.propTypes = {
//   reviews: PropTypes.array,
//   product:PropTypes.object.isRequired,
// };

export default ReadReviews;
