import React, { Suspense } from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import useGetHotelList from "./header/navbar/navbarReservationModal/useGetHotelList";
import { useRecoilState } from "recoil";
import { bookingInformationAtomState } from "@/store/getHotelListQuery";
import CardImg from "@/components/card/CardImg";
import CardText from "@/components/card/CardText";
import useGetHotelListItem from "@/store/useGetHotelListItem";
import useGetHotelLists from "@/store/getHotelList";

const CardWrap = () => {
  // const { fetchData, options, changeData } = useGetHotelList();
  const { fetchData, options, changeData } = useGetHotelLists();

  const [hotelList, setHotelList] = useRecoilState(bookingInformationAtomState);
  const { data, isLoading } = useQuery({
    queryKey: ["getHotelList"],
    queryFn: fetchData,
  });

  return (
    <Suspense fallback={<div>Loading......</div>}>
      {!isLoading && (
        <Box
          sx={{
            width: "90%",
            padding: "2rem 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
            rowGap: "2rem",
            columnGap: "2rem",
            cursor: "pointer",
            position: "absolute",
            top: "10rem",
          }}
        >
          {data?.result?.map(
            (
              value: {
                max_photo_url: string;
                hotel_name: string;
                review_score: string;
                city: string;
                review_score_word: string;
                min_total_price: number;
              },
              index: React.Key
            ) => (
              <Box
                key={value.hotel_name + index}
                sx={{
                  width: "100%",
                  border: "1px solid lightgray",
                  borderRadius: "5px",
                  rowGap: "4",
                }}
              >
                <CardImg img={value?.max_photo_url} />
                <CardText
                  hotelName={value.hotel_name}
                  score={value.review_score}
                  location={value.city}
                  day={value.review_score_word}
                  price={value.min_total_price}
                />
              </Box>
            )
          )}
        </Box>
      )}
    </Suspense>
  );
};

export default CardWrap;
