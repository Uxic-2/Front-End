import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import "../styles/support/supportQuestion.css";

import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBSupport";

const questions = [
  {
    id: 1,
    question: "PHOTATO는 어떤 서비스인가요?",
    answer:
      "PHOTATO는 사용자가 업로드한 사진을 분석하여 위치 정보를 추출하고, 이를 기반으로 주변의 관광지, 숙소, 맛집 등을 추천해주는 국내 여행 추천 시스템입니다.",
  },
  {
    id: 2,
    question: "사진에서 위치 정보를 어떻게 추출하나요?",
    answer:
      "PHOTATO는 사진의 메타데이터에 포함된 GPS 정보를 이용하여 위치를 추출합니다. 사진에 GPS 정보가 없는 경우 위치를 추출할 수 없습니다.",
  },
  {
    id: 3,
    question: "GPS 정보가 없는 사진도 업로드할 수 있나요?",
    answer:
      "네, GPS 정보가 없는 사진도 업로드할 수 있습니다. 그러나 위치 정보가 없기 때문에 여행지 추천 기능을 이용하기 위해서는 사진에 위치 정보를 직접 입력해주셔야 합니다.",
  },
  {
    id: 4,
    question: "여행지 추천은 어떻게 이루어지나요?",
    answer:
      "업로드한 사진에서 추출한 위치 정보를 바탕으로 주변의 유명 관광지와 자연 경관을 추천합니다. 추천 결과는 해당 지역의 관광지 정보와 사용자 리뷰를 기반으로 제공합니다.",
  },
  {
    id: 5,
    question: "숙소 추천은 어떤 기준으로 제공되나요?",
    answer:
      "PHOTATO는 추천된 여행지 주변의 인기 숙소를 사용자 리뷰와 평점을 기준으로 추천합니다. 숙소의 객실 이미지는 VR 또는 360º 동영상을 통해 실제와 같은 경험을 제공합니다.",
  },
  {
    id: 6,
    question: "맛집 추천은 어떻게 이루어지나요?",
    answer:
      "추천된 여행지 주변의 맛집을 사용자 리뷰와 평점을 반영하여 맞춤형으로 추천합니다. 다양한 음식점의 정보를 제공하며, 사용자 선호도를 기반으로 최적의 맛집을 찾아드립니다.",
  },
  {
    id: 7,
    question: "서비스를 이용하려면 회원 가입이 필요한가요?",
    answer:
      "기본적인 기능은 회원 가입 없이 이용할 수 있지만, 개인 맞춤형 추천 기능과 리뷰 작성 등의 서비스를 이용하려면 회원 가입이 필요합니다.",
  },
  {
    id: 8,
    question: "사진 업로드 시 개인정보는 안전하게 보호되나요?",
    answer:
      "PHOTATO는 사용자 개인정보 보호를 최우선으로 하며, 업로드된 사진과 관련된 모든 데이터는 철저히 보호됩니다. 자세한 내용은 개인정보 보호정책을 참조해 주세요.",
  },
  {
    id: 9,
    question: "문제가 발생했을 때 어떻게 문의하나요?",
    answer:
      "서비스 이용 중 문제가 발생하거나 도움이 필요하시면 고객 지원팀에 문의해 주세요. 문의는 홈페이지의 ‘SUPPORT - 문의사항’ 섹션에서 가능합니다.",
  },
];

const SupQuestion = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleAnswer = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="w-[75%] mx-auto pt-[50px]">
        <h1 className="text-2xl font-bold mb-[20px]">자주 묻는 질문</h1>
        <table className="faq-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q) => (
              <React.Fragment key={q.id}>
                <tr onClick={() => toggleAnswer(q.id)} className="faq-question">
                  <td>{q.id}</td>
                  <td>{q.question}</td>
                </tr>
                <tr
                  className={`faq-answer ${
                    openQuestionId === q.id ? "show" : ""
                  }`}
                >
                  <td colSpan="2">{q.answer}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button>{"<"}</button>
          <span className="page-number">1</span>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default SupQuestion;
