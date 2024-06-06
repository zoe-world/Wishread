d![logo](https://github.com/zoe-world/Wishread/assets/114548167/ab9c46cd-519d-4178-a720-f213d850da72)

# 📚 WISHREAD

> 읽고 싶은 책들을 찾아 나만의 위시리스트를 만드는 서비스를 만들었습니다.

- 인원 : FE 및 디자인: 이조은 인원 1명
- 기간 : 약 1개월 (24/5 ~)

## 🔧 기술스택

<div align="center">
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
</div>

## 적용기술

- 라이브러리 : react(router)
- 프로그래밍 언어 : typescript
- 상태관리 : recoil
- style : styled-component, fontawesome
- 데이터 : kakao api

## 주요기능의 대한 간단한 코멘트✏️

### 📝 데이터 관리

- books.ts 에서 kakao 도서 검색 api를 axios를 사용해 비동기적으로 받아온다.
  데이터관리를 위해 recoil사용

### 📝 recoil을 이용한 상태관리

atom 생성하여 전역적으로 상태를 분리해야하는 경우 상태관리함.
파라미터로 값을 전달받아, 기존 atom 에 저장된 상태값의 불변성은 유지하되, return 값을 받아서 처리하는 selectorFamily를 사용함.

### 📝 Style

GlobalStyle
크게 컴포넌트들을 Login/ main/ Mypage / Cart / Around 부분으로 나누고 그안에서 공통된 style 컴포넌트를 만들어 카테고리 디렉토리별로 공통된 style을 적용하고 각 세부 컴포넌트에서 약간의 다른 style일 경우 컴포넌트 아래의 공통된 style을 가져와 적용.

### 📝 main page

- 검색창
  제일 상단 부분에 있는 검색기능

실시간 인기 검색어 기능으로 interval 메서드로 비교적 간단하게 구현 완성(DB 미완성으로 프론트에서 구현)
각 메뉴에 따른 상세 스토어로 이동 및 주문
각 9가지 길거리 음식으로 한정되어 각각 메뉴들 클릭시 가까운순/판매량순/리뷰순/별점순 으로 페이지 이동처리.
가까운순/판매량순/리뷰순/별점순 으로 나온 메뉴들 클릭시 해당 스토어 메뉴/정보/리뷰 노출 , 메뉴에 따른 장바구니에 추가하는 기능구현.
나와 가장 가까운 간식 top5
내 위치에서 가장 가까운 간식스토어를 찾아 알려주는 section.
길거리 스토어가 DB로 찾기 어려워 간식스토어의 DB를 가져와 처리

### 📝 wishbook

위시리스트 페이지에서는 상세 페이지에서 북마크 버튼을 누른 상품들이 담겨있음.
상품삭제를 원할 경우 상세페이지에서 북마크 버튼을 다시 누르면 북마크 해제됨.

## 프로젝트 소개

- 읽고 싶은 책, 읽은 책을 조회, 검색, 정렬, 필터링할 수 있는 책 위시리스트 앱입니다.

## 프로젝트의 주요 목표

- 공공데이터 오픈 API 다루기연습
- recoil의 selector를 통해 API로 받아온 데이터 캐싱
- recoil의 atom, selector를 이용하여 검색, 정렬, 필터링 기능 구현
- React Portal을 이용하여 모달창 구현
- 위시 북들을 모아볼 수 있으며, localStorage에 데이터 저장
