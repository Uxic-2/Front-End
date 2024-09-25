import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBMypage";
import Map from "./Map"; 
import Modal from "./UploadModal";
import axios from "axios";
import map_icon from "../imgs/mypage_map_icon.svg";

function MyMap() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [uploadedPhotoIds, setUploadedPhotoIds] = useState([]);
    const [uploadedPhotos, setUploadedPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [kakaoMapLoaded, setKakaoMapLoaded] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    useEffect(() => {
        const fetchUploadedPhotoIds = async () => {
            try {
                const response = await axios.get("http://localhost:8080/mypage");
                setUploadedPhotoIds(response.data.uploaded_photoid || []);
            } catch (error) {
                console.error("Error fetching uploaded photo IDs", error);
                setUploadedPhotoIds([]);
            }
        };

        fetchUploadedPhotoIds();
    }, []);

    useEffect(() => {
        const loadKakaoMap = () => {
            if (!window.kakao || !window.kakao.maps) {
                const script = document.createElement("script");
                script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_ACTUAL_API_KEY&autoload=false"; // 여기서 YOUR_ACTUAL_API_KEY 부분

                script.async = true;
                script.onload = () => {
                    window.kakao.maps.load(() => {
                        setKakaoMapLoaded(true);
                    });
                };
                script.onerror = () => {
                    console.error("Failed to load Kakao Maps API");
                };
                document.head.appendChild(script);
            } else {
                setKakaoMapLoaded(true);
            }
        };

        loadKakaoMap();
    }, []);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const photos = await Promise.all(
                    (uploadedPhotoIds || []).map(async (id) => {
                        const response = await axios.get(`http://localhost:8080/photo/${id}`);
                        return response.data;
                    })
                );
                setUploadedPhotos(photos || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching photos", error);
                setLoading(false);
                setUploadedPhotos([]);
            }
        };

        if ((uploadedPhotoIds || []).length > 0) {
            fetchPhotos();
        } else {
            setLoading(false);
        }
    }, [uploadedPhotoIds]);

    const handleUploadSuccess = (newPhoto) => {
        setUploadedPhotos([...uploadedPhotos, newPhoto]);
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
