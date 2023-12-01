import React from "react";
import { Box, Card, Stack, TextField } from "@mui/material";
import styled from "@emotion/styled";

interface props {
  location: string;
  score: string;
  view: string;
  day: string;
  price: string;
}

const CardText = ({ location, score, view, day, price }: props) => {
  return (
    <Stack>
      {/* 나라+지역 / 별점 */}
      <SpacingStack spacing={"auto"} direction={"row"}>
        <BoldText> {location} </BoldText>
        <Text> {`★ ${score}`} </Text>
      </SpacingStack>

      {/* 전망 정보 */}
      <SpacingStack>
        <Text>{`${view} 전망`}</Text>
      </SpacingStack>

      {/* 숙박 일정 */}
      <SpacingStack>
        <Text>{day}</Text>
      </SpacingStack>

      {/* 1박 가격 */}
      <SpacingStack>
        <BoldText>{`￦${price} /박`}</BoldText>
      </SpacingStack>
    </Stack>
  );
};

export default CardText;

const Text = styled.span`
  font-size: 0.8rem;
`;
const BoldText = styled(Text)`
  font-weight: bold;
`;

const SpacingStack = styled(Stack)`
  padding: 0.1rem;
`;
