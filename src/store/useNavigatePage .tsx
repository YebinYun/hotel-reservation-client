import { useState } from "react";
import { GetHotelListInit } from "./getHotelListQuery";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type GuestsInformation = {
  id: number;
  guests: string;
  age: string;
  quantity: number;
};

type UseNavigatePageResult = {
  pageIndex: number;
  rangeDate: Value;
  guestsInformation: GuestsInformation[];
  setGuestsInformation: () => void;
  totalQuantity: number;
  dateChangeHandler: (e: any) => void;
  previousPage: () => void;
  nextPage: () => void;
};

const guestsInformationInit: GetHotelListInit = {
  checkin_date: new Date(),
  checkout_date: null,
  adults_number: 0,
  children_number: 0,
};

export const useNavigatePage = (): UseNavigatePageResult => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [rangeDate, setRangeDate] = useState<Value>(null);
  const [guestsInformation, setGuestsInformation] = useState(
    guestsInformationInit
  );

  const dateChangeHandler = (e: any) => {
    setRangeDate(e);
  };

  const totalQuantity =
    guestsInformation.adults_number + guestsInformation.children_number;

  const validateInputs = () => {
    if (pageIndex === 1 && rangeDate === null) {
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

  return {
    pageIndex,
    rangeDate,
    guestsInformation,
    setGuestsInformation,
    dateChangeHandler,
    previousPage,
    nextPage,
    totalQuantity,
  };
};
