import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBMypage";
import Map from "./MapApi";
import Modal from "./UploadModal";
import axios from "axios";
import map_icon from "../imgs/mypage_map_icon.svg";

function MyMap() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [uploadedPhotoIds, setUploadedPhotoIds] = useState([]); // 배열로 기본 초기화
  const [uploadedPhotos, setUploadedPhotos] = useState([]); // 배열로 기본 초기화
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [kakaoMapLoaded, setKakaoMapLoaded] = useState(false); // Kakao 지도 로드 상태

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // 서버에서 업로드된 사진 ID를 가져와서 상태에 저장
  useEffect(() => {
    const fetchUploadedPhotoIds = async () => {
      try {
        const response = await axios.get("http://localhost:8080/mypage"); // 서버에서 사진 ID 리스트를 가져옴
        setUploadedPhotoIds(response.data.uploaded_photoid || []); // 업로드된 사진의 ID 리스트 저장 (빈 배열 기본값)
      } catch (error) {
        console.error("Error fetching uploaded photo IDs", error);
        setUploadedPhotoIds([]); // 오류 발생 시에도 빈 배열로 처리
      }
    };

    fetchUploadedPhotoIds();
  }, []);

  // Kakao 지도 로드
  useEffect(() => {
    const loadKakaoMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        const script = document.createElement("script");
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false";
        script.async = true;
        script.onload = () => {
          window.kakao.maps.load(() => {
            setKakaoMapLoaded(true); // Kakao Map 로드 완료 시 상태 업데이트
          });
        };
        document.head.appendChild(script);
      } else {
        setKakaoMapLoaded(true); // 이미 로드된 경우 바로 상태 업데이트
      }
    };

    loadKakaoMap();
  }, []);

  // 업로드된 사진 ID를 사용해 각 사진을 서버로부터 하나씩 가져오기
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const photos = await Promise.all(
          (uploadedPhotoIds || []).map(async (id) => {
            const response = await axios.get(
              `http://localhost:8080/photo/${id}`
            ); // 서버에서 사진 파일을 가져옴
            return response.data;
          })
        );
        setUploadedPhotos(photos || []); // 사진 데이터 저장 (빈 배열 기본값)
        setLoading(false); // 로딩 상태 해제
      } catch (error) {
        console.error("Error fetching photos", error);
        setLoading(false); // 로딩 상태 해제 (실패 시에도)
        setUploadedPhotos([]); // 오류 발생 시에도 빈 배열로 처리
      }
    };

    if ((uploadedPhotoIds || []).length > 0) {
      fetchPhotos();
    } else {
      setLoading(false); // 사진 ID가 없는 경우 로딩 해제
    }
  }, [uploadedPhotoIds]);

  const handleUploadSuccess = (newPhoto) => {
    setUploadedPhotos([...uploadedPhotos, newPhoto]); // 새로운 사진을 추가
  };

  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="flex-1 pt-[50px] w-[75%]">
        <div className="items-center mb-10">
          <div className="flex">
            <img src={map_icon} alt="Map Icon" />
            <h2 className="text-2xl">내 지도</h2>
          </div>
          {/* Kakao 지도 로드 시에만 지도 렌더링 */}
          {kakaoMapLoaded ? (
            <Map className="z-0 w-[70%] h-[70vh] bg-slate-200" />
          ) : (
            <div>지도를 불러오는 중...</div>
          )}
        </div>

        <div className="flex flex-col items-center mx-auto m-20 p-12 w-[70%] h-[40vh] bg-[#E4EBF1] rounded-2xl">
          <div className="mt-7 text-2xl text-center font-bold">
            여행지 사진을 업로드하여
            <br />
            나의 지도를 채워보세요
          </div>
          <Link
            to="#"
            className="bg-black text-white text-center p-2 w-[20%] h-[40px] m-auto rounded-md"
            onClick={openModal}
          >
            Upload
          </Link>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            onUploadSuccess={handleUploadSuccess}
          />
        </div>

        {/* 업로드된 사진 로딩 상태 관리 */}
        {loading ? (
          <div>로딩 중...</div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {(uploadedPhotos || []).length > 0 ? (
              uploadedPhotos.map((photo, index) => (
                <div key={index} className="p-2">
                  <img
                    src={`http://localhost:8080/image/${photo.filename}`}
                    alt={photo.metadata?.title || "Untitled"}
                    className="w-full h-auto"
                  />
                  <h3 className="text-center">
                    {photo.metadata?.title || "No Title"}
                  </h3>
                  <p className="text-center">
                    {photo.metadata?.address || "No Address"}
                  </p>
                </div>
              ))
            ) : (
              <div>사진이 없습니다.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyMap;
