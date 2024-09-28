import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBMypage";
import Modal from "./UploadModal";
import MapApi from "./MapApi"; // MapApi 추가
import map_icon from "../imgs/mypage_map_icon.svg";
import spot5 from "../imgs/spot5.png";
import spot8 from "../imgs/spot8.png";
import spot11 from "../imgs/spot11.png";

function MyMap() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [uploadedPhotos, setUploadedPhotos] = useState([]);
    const [kakaoMapLoaded, setKakaoMapLoaded] = useState(false); 

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleUploadSuccess = (newPhoto) => {
        setUploadedPhotos([...uploadedPhotos, newPhoto]);
    };

    const preloadedPhotos = [
        {
            filename: spot5,
            metadata: {
                title: "Daegu Hidden Spot",
                address: "Daegu",
                description: "대구의 숨겨진 여행지입니다."
            }
        },
        {
            filename: spot8,
            metadata: {
                title: "Daejeon Hidden Spot",
                address: "Daejeon",
                description: "대전의 숨겨진 여행지입니다."
            }
        },
        {
            filename: spot11,
            metadata: {
                title: "Sejong Hidden Spot",
                address: "Sejong",
                description: "세종시의 숨겨진 여행지입니다."
            }
        }
    ];

    useEffect(() => {
        if (kakaoMapLoaded && window.kakao && window.kakao.maps) {
            const container = document.getElementById("map");
            const options = {
                center: new window.kakao.maps.LatLng(37.5665, 126.9780), 
                level: 3, 
            };
            const map = new window.kakao.maps.Map(container, options);
        }
    }, [kakaoMapLoaded]);

    useEffect(() => {
        setUploadedPhotos(preloadedPhotos); 
    }, []);

    return (
        <div className="flex">
            <SideBar links={links} />
            <div className="flex-1 pt-[50px] w-[75%] pr-10"> 
                <div className="items-center mb-10">
                    <div className="flex">
                        <img src={map_icon} alt="Map Icon" />
                        <h2 className="text-2xl">내 지도</h2>
                    </div>
                    <div className="z-0 w-[70%] h-[70vh] bg-slate-200" id="map">
                        {!kakaoMapLoaded && (
                            <div className="flex items-center justify-center h-full">
                                지도를 불러오는 중...
                            </div>
                        )}
                    </div>
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

                <div className="grid grid-cols-3 gap-6 mb-10">
                    {(uploadedPhotos || []).length > 0 ? (
                        uploadedPhotos.map((photo, index) => (
                            <div key={index} className="p-2 bg-white rounded-lg shadow-lg">
                                <img
                                    src={photo.filename}
                                    alt={photo.metadata?.title || "Untitled"}
                                    className="w-11/12 h-auto rounded-md" 
                                    style={{
                                        objectFit: "cover",
                                        height: "180px"
                                    }}
                                />

                                <h3 className="text-center mt-2">
                                    {photo.metadata?.title || "No Title"}
                                </h3>
                                <p className="text-center">
                                    {photo.metadata?.address || "No Address"}
                                </p>
                                <p className="text-center text-sm">
                                    {photo.metadata?.description || "No Description"}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div>사진이 없습니다.</div>
                    )}
                </div>
            </div>
            {/* 카카오맵 로딩 컴포넌트 */}
            <MapApi setKakaoMapLoaded={setKakaoMapLoaded} />
        </div>
    );
}

export default MyMap;
