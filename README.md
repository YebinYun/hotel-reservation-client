## 🚀 소개

#### 🏨 전세계 호텔 예약 확인(정보 및 가능 여부 확인) 사이트

<br>

## 🕐 기간

2023.11.29 ~ 2023.12.28

<br>

## ⚒️ Stack

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=black"><img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=black"><img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=black">

<br>

## 📌 주요 기능

| 기능            | 화면                                               |
| --------------- | -------------------------------------------------- |
| 메인            | <img src="public\images\홈화면.png" alt="메인"/>   |
| 회원가입 (유저) | <img src="public\images\회원가입.png" alt="지도"/> |
| 로그인 (유저)   | <img src="public\images\로그인.png" alt="지도"/>   |
| 수정하기 (유저) | <img src="images\수정하기.png" alt="지도"/>        |
| 지도 (예약)     | <img src="images\지도.png" alt="지도"/>            |
| 달력 (예약)     | <img src="images\캘린더.png" alt="달력"/>          |
| 인원 (예약)     | <img src="images\인원.png" alt="인원"/>            |

## 📁 폴더 구조

```
.
├───.next
│
├───.vscode
│
├───node_modules
│
├───public
│   └───images
│
└───src
    ├───api
    │   └───getHotelList.tsx
    │
    ├───app
    │   ├───layout.css
    │   ├───layout.tsx
    │   └───page.tsx
    │
    ├───components
    │   ├───header
    │   │   ├───headerBookingMenu
    │   │   │   ├───bookingCalender
    │   │   │   │   └───BookingDateInput.tsx
    │   │   │   │
    │   │   │   ├───bookingGuest
    │   │   │   │   └───BookingDateInput.tsx
    │   │   │   │
    │   │   │   ├───bookingMap
    │   │   │   │   ├───BookingMapSearch.tsx
    │   │   │   │   └───Map.tsx
    │   │   │   │
    │   │   │   ├───BookingModalComponent.tsx
    │   │   │   ├───BookingModalHeaderComponent.tsx
    │   │   │   └───BookingProgressComponent.tsx
    │   │   │
    │   │   ├───headerUserMenu
    │   │   │   ├───UserModalComponent.tsx
    │   │   │   └───LoginToggleDropDownComponent.tsx
    │   │   │
    │   │   ├───HeaderBottomComponent.tsx
    │   │   ├───HeaderComponent.tsx
    │   │   └───HeaderTopComponent.tsx
    │   │
    │   └───main
    │       ├───HotelListComponent.tsx
    │       ├───HotelListCardComponent.tsx
    │       └───HotelListTitleComponent.tsx
    │
    ├───containers
    │   ├───header
    │   │   ├───headerUserMenu
    │   │   │   └───UserModalContainer.tsx
    │   │   │
    │   │   ├───HeaderBottomContainer.tsx
    │   │   ├───HeaderContainer.tsx
    │   │   └───HeaderTopContainer.tsx
    │   │
    │   └───main
    │       └───HotelListContainer.tsx
    │
    ├───hooks
    │   └───useDataAlert.tsx
    │
    ├───recoil
    │   ├───RecoilHotelLike.tsx
    │   ├───RecoilHotelList.tsx
    │   └───RecoilPageIndex.tsx
    │
    └───utils
        ├───countryCapital.json
        ├───HeaderIcon.tsx
        ├───hotelDummyList.tsx
        └───userData.json
```
