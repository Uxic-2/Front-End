import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SideBar from "../components/SideBar";
import links from "../components/SideBar/SBMypage";

import folder_icon from "../imgs/mypage_folder.svg";

import Modal from "./MyFolderModal";

function MyFolder() {
  const myFolder = [
    { folder_name: "서울" },
    { folder_name: "부산" },
    { folder_name: "대구" },
    { folder_name: "광주" },
    { folder_name: "제주도" },
    { folder_name: "인천" },
    { folder_name: "강릉" }
  ];
  
  const listItems = 3; 

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="flex-1 pt-[50px] ">
        <div className="items-center">
          <div className="flex m-auto w-[70%] ">
            <h2 className="text-2xl font-bold">하트 보관함</h2>
          </div>
        </div>
        <div className="overflow-auto m-auto pb-5 w-[70%] h-[75vh] border-2 border-main-orange rounded-2xl">
          {Array.from(Array(Math.ceil(myFolder.length / listItems)).keys()).map(
            (v) => {
              return (
                <div className="flex m-auto w-[80%]">
                  {Array.from(
                    {
                      length:
                        myFolder.length - v * listItems >= listItems
                          ? listItems
                          : myFolder.length % listItems,
                    },
                    (_, i) => v * listItems + i
                  ).map((spot, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center w-[33%] mt-20"
                        onClick={openModal}
                      >
                        <img
                          src={folder_icon}
                          className="w-[120px] h-[120px]"
                          alt="Folder Icon"
                        />
                        <div className="flex-1 text-base text-center">
                          {myFolder[spot].folder_name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            }
          )}
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default MyFolder;
