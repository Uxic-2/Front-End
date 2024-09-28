import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import img_icon from "../imgs/mymap_image.png";
import loc_icon from "../imgs/mymap_loc.png";
import usericon from "../imgs/userIcon.svg";

Modal.setAppElement("#root");

function PresentaionalModal({ isOpen, onRequestClose, onUploadSuccess }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [showAddressField, setShowAddressField] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      resetFields();
    }
  }, [isOpen]);

  const resetFields = () => {
    setSelectedFile(null);
    setPreviewSrc(null);
    setTitle("");
    setDescription("");
    setAddress("");
    setLatitude("");
    setLongitude("");
    setShowAddressField(false);
  };

  const extractLocationFromExif = (file) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.src = event.target.result;
      img.onload = function () {
        window.EXIF.getData(img, function () {
          const gpsLatitude = window.EXIF.getTag(this, "GPSLatitude");
          const gpsLongitude = window.EXIF.getTag(this, "GPSLongitude");
          const gpsLatitudeRef = window.EXIF.getTag(this, "GPSLatitudeRef");
          const gpsLongitudeRef = window.EXIF.getTag(this, "GPSLongitudeRef");

          if (
            gpsLatitude &&
            gpsLongitude &&
            gpsLatitudeRef &&
            gpsLongitudeRef
          ) {
            const lat = convertDMSToDecimal(gpsLatitude, gpsLatitudeRef);
            const lon = convertDMSToDecimal(gpsLongitude, gpsLongitudeRef);
            setLatitude(lat);
            setLongitude(lon);
          } else {
            setShowAddressField(true);
          }
        });
      };
    };
    reader.readAsDataURL(file);
  };

  const convertDMSToDecimal = (dms, ref) => {
    const [degrees, minutes, seconds] = dms;
    let decimal = degrees + minutes / 60 + seconds / 3600;
    return ref === "S" || ref === "W" ? -decimal : decimal;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewSrc(reader.result);
    };
    reader.readAsDataURL(file);

    extractLocationFromExif(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const uploadPost = () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const newPhoto = {
      filename: previewSrc,
      metadata: {
        title: title,
        description: description,
        address: address || `위도: ${latitude}, 경도: ${longitude}`,
        latitude: latitude,
        longitude: longitude,
      },
    };

    onUploadSuccess(newPhoto);
    resetFields();
    onRequestClose();
  };

  return (
    <Modal
      className={`z-[9999] fixed z-0 bg-[#FFFADD] m-[2%_0_0_10%] w-[80%] h-[95vh] overflow-auto rounded-[20px]${
        isOpen ? "" : "hidden"
      }`}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
    >
      <div className="p-5">
        <button className="ml-[98%]" onClick={onRequestClose}>
          X
        </button>
        <div className="flex items-center justify-left mb-2">
          <img src={usericon} alt="usericon" className="w-[5%] h-auto mr-2" />
          <div>user_123</div>
        </div>

        <div className="flex bg-white m-auto w-[100%] h-[70vh] mb-2 rounded-[20px] shadow-lg">
          <div className="flex flex-col w-[50%] justify-center">
            {previewSrc ? (
              <img
                className="mt-[5%] mb-5 m-auto rounded-[15px]"
                src={previewSrc}
                alt="Preview"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div className="mt-[5%] mb-5 m-auto text-center rounded-[15px] border-dashed border-2 border-gray-300 p-10">
                사진을 여기에 끌어다 놓으세요
              </div>
            )}
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <button
              className="m-[1%_auto_3%] bg-main-orange text-white w-[70%] h-[40px] rounded-[20px]"
              onClick={handleButtonClick}
            >
              컴퓨터에서 선택
            </button>
          </div>

          <div className="flex flex-col w-[50%]">
            <div className="flex m-[2%_auto] w-[100%] items-center">
              <img className="w-5 h-5" src={loc_icon} alt="location icon" />
              {latitude && longitude ? (
                <div className="ml-2">{`위도: ${latitude}, 경도: ${longitude}`}</div>
              ) : (
                <div className="w-[100%] ml-2">
                  <input
                    className="w-[100%] p-4 border bg-white bg-opacity-0 text-xs rounded-[10px]"
                    type="text"
                    placeholder="위치를 입력해주세요"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              )}
            </div>
            <div className="m-[2%_auto] w-[100%]">
              <form>
                <input
                  className="w-[100%] p-4 border bg-white bg-opacity-0 text-xs rounded-[10px]"
                  type="text"
                  placeholder="제목"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="w-[100%] p-4 border bg-white bg-opacity-0 resize-none text-xs rounded-[10px]"
                  placeholder="설명글"
                  rows="6"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-[100%]">
          <button
            className="bg-main-orange text-white w-[15%] h-[40px] m-auto rounded-[20px]"
            onClick={uploadPost}
          >
            Upload
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default PresentaionalModal;
