"use client";

import React, { useState } from "react";
import HeaderTopComponent from "@/components/header/HeaderTopComponent";
import BookingModalComponent from "@/components/header/headerBookingMenu/BookingModalComponent";
import LoginToggleDropDownComponent from "@/components/header/headerUserMenu/LoginToggleDropDownComponent";
import LogoutToggleDropDownComponent from "@/components/header/headerUserMenu/LogoutToggleDropDownComponent";
import UserModalComponent from "@/components/header/headerUserMenu/UserModalComponent";
import {
  bookingInformationSelector,
  useBookingInfoChangeHandler,
} from "@/store/userPage/bookingHotelListData";
import { useRecoilState } from "recoil";
import { useBookingPageChangeHandler } from "@/store/userPage/bookingPageIndex";
import { useLoginDataState } from "@/store/auth/userData";

const HeaderTopContainer = (props: { match: boolean }) => {
  const [isUserDataModalOpen, setIsUserDataModalOpen] =
    useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  const toggleBookingModal = () => setIsBookingModalOpen(!isBookingModalOpen);
  const toggleUserDataModal = () =>
    setIsUserDataModalOpen(!isUserDataModalOpen);

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);

  const loginModalHandler = () => {
    setIsLogin(!isLogin);
    setIsUserDataModalOpen(false);
  };

  const signupModalHandler = () => {
    setIsSignup(!isSignup);
    setIsUserDataModalOpen(false);
  };

  const settingModalHandler = () => {
    setIsSetting(!isSetting);
    setIsUserDataModalOpen(false);
  };

  const closeModalHandler = () => {
    setIsLogin(false);
    setIsSignup(false);
    setIsSetting(false);
  };

  const userChoice = `${isLogin ? "로그인" : isSignup ? "회원가입" : "수정"}`;

  // 로그인/회원가입 전환 핸들러
  const userChangeHandler = () => {
    if (isLogin) {
      setIsLogin(false);
      setIsSignup(true);
    } else if (isSignup) {
      setIsLogin(true);
      setIsSignup(false);
    }
  };

  const totalCounterHandler = (guestType: string, value: number) => {
    const updateList = { ...coordsValue };

    if (guestType !== "children") updateList.adults_number += value;
    else updateList.children_number += value;

    return setCoorsValue(updateList);
  };

  const { handleOnBookingInfoChange, bookingInfo } =
    useBookingInfoChangeHandler();

  const [coordsValue, setCoorsValue] = useRecoilState(
    bookingInformationSelector
  );

  const { prevPage, nextPage, totalQuantity, pageIndex, setPageIndex } =
    useBookingPageChangeHandler();

  const { token } = useLoginDataState();

  return (
    <>
      <HeaderTopComponent
        toggleUserDataModal={toggleUserDataModal}
        toggleBookingModal={toggleBookingModal}
        match={props.match}
      />

      {isBookingModalOpen && (
        <BookingModalComponent
          totalCounterHandler={totalCounterHandler}
          isBookingModalOpen={isBookingModalOpen}
          toggleBookingModal={toggleBookingModal}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          totalQuantity={totalQuantity}
          nextPage={nextPage}
          prevPage={prevPage}
          coordsValue={coordsValue}
          setCoorsValue={setCoorsValue}
          handleOnBookingInfoChange={handleOnBookingInfoChange}
          bookingInfo={bookingInfo}
        />
      )}

      {isUserDataModalOpen &&
        (token ? (
          <LogoutToggleDropDownComponent
            settingModalHandler={settingModalHandler}
            toggleUserDataModal={toggleUserDataModal}
            setIsUserDataModalOpen={setIsUserDataModalOpen}
          />
        ) : (
          <LoginToggleDropDownComponent
            loginModalHandler={loginModalHandler}
            signupModalHandler={signupModalHandler}
            settingModalHandler={settingModalHandler}
          />
        ))}

      {(isLogin || isSignup || isSetting) && (
        <UserModalComponent
          closeModalHandler={closeModalHandler}
          userChangeHandler={userChangeHandler}
          isLogin={isLogin}
          isSetting={isSetting}
          userChoice={userChoice}
        />
      )}
    </>
  );
};

export default HeaderTopContainer;
