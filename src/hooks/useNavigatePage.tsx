import { bookingInformationSelector } from "@/recoil/RecoilHotelList";
import { useState } from "react";
import { useRecoilValue } from "recoil";

export const useNavigatePage = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);

  const bookingInformation = useRecoilValue(bookingInformationSelector);

  const totalQuantity =
    bookingInformation.adults_number + bookingInformation.children_number;

  const validateInputs = () => {
    if (pageIndex === 1 && !bookingInformation?.dates[1]) {
      alert("날짜를 입력해주세요.");
      return false;
    }
    return true;
  };

  const previousPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  const nextPage = () => {
    if (pageIndex < 2) {
      const isValid = validateInputs();
      if (!isValid) return;

      setPageIndex(pageIndex + 1);
    }
  };

  return { pageIndex, totalQuantity, previousPage, nextPage };
};