import HotelListCardComponent from "@/components/main/HotelListCardComponent";
import HotelListTitleComponent from "@/components/main/HotelListTitleComponent";
import { Box, Pagination } from "@mui/material";
import React, { useState } from "react";
import HostInfoModal from "./hotelListItem/HostInfoModal";

type props = {
  handleOnClickLike: (userId: any, hotelId: any) => void;
  post: any;
  count: any;
  page: any;
  handleChange: any;
  userData: any;
};

const HotelListComponent = ({
  handleOnClickLike,
  post,
  count,
  page,
  userData,
  handleChange,
}: props) => {
  const token = window.localStorage.getItem("token");
  const userId = token ? JSON.parse(token)?.userId : null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idx, getIndex] = useState("null");
  const [isImgError, setIsImgError] = useState<boolean>(false);

  return (
    <>
      <Box
        sx={{
          padding: "2rem 5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
          rowGap: "2rem",
          columnGap: "2rem",
          cursor: "pointer",
        }}
      >
        {post?.map((value: any, index: React.Key) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              border: "1px solid lightgray",
              borderRadius: "5px",
              rowGap: "4",
            }}
          >
            <HotelListCardComponent
              likes={userData.likes}
              handleOnClickLike={handleOnClickLike}
              img={value?.images.picture_url}
              hotelId={value?._id}
              userId={userId}
              data={value}
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
              getIndex={getIndex}
              index={index}
            />
            <HotelListTitleComponent
              hotelName={value.name}
              score={value?.review_scores?.review_scores_rating}
              location={value.address.country}
              price={value.price.$numberDecimal}
            />
          </Box>
        ))}
      </Box>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        sx={{ my: "5rem", display: "flex", justifyContent: "center" }}
        size="large"
      />
      {isModalOpen && (
        <HostInfoModal
          data={post[idx]}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          isImgError={isImgError}
          setIsImgError={setIsImgError}
        />
      )}
    </>
  );
};

export default HotelListComponent;