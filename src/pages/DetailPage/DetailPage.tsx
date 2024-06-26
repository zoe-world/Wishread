import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import WishBookItemImg from "components/Book/WishBookItemImg";
import WishBookItemInfo from "components/Book/WishBookItemInfo";
import IconButton from "components/common/Button/IconButton";
import { BookDTO } from "components/types/searchType";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  bookDetailState,
  detailBookSelector,
  searchInfoState,
} from "recoil/books";
import styled from "styled-components";
import FootPage from "pages/MainPage/FootPage";

function DetailPage(): JSX.Element {
  const location = useLocation();
  // 선택된 책 정보
  const result = location.state?.result;
  const bookCode = location.state?.result.isbn;

  const { upDateBookmarkClick, upDateDetailClick } =
    useRecoilValue(detailBookSelector);

  const detail = useRecoilValue(bookDetailState);
  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    upDateDetailClick(result.isbn);
  }, [bookCode]);

  // 북마크가 되어있는지 확인
  const isBookmark = detail.find(
    (v: BookDTO) => Object.keys(v)[0] === result.isbn
  );

  return (
    <Wrapper>
      <IconWrap>
        <IconButton
          icon={faChevronLeft}
          fontSize="20px"
          color="#0047AB"
          onClick={goBack}
        />
        <IconButton
          fontSize="20px"
          icon={isBookmark[bookCode].isMarked ? fasBookmark : farBookmark}
          color="#0047AB"
          onClick={() => upDateBookmarkClick(result.isbn)}
        ></IconButton>
      </IconWrap>
      <WishBookItemImg
        title={result.title}
        thumbnail={result.thumbnail}
        page="detail"
      ></WishBookItemImg>
      <WishBookItemInfo
        authors={result.authors}
        contents={result.contents}
        datetime={result.datetime}
        isbn={result.isbn}
        price={result.price}
        publisher={result.publisher}
        sale_price={result.sale_price}
        status={result.status}
        thumbnail={result.thumbnail}
        title={result.title}
        translators={result.translators}
        url={result.url}
        page="detail"
      ></WishBookItemInfo>
      <FootPage page="detail" />
    </Wrapper>
  );
}

export default DetailPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px var(--pd-content);
`;
