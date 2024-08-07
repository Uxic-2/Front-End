// Mypage에서 불러오는 모달입니다
import React from "react";
import Modal from "react-modal";
import "../styles/uploadmodal.css";

Modal.setAppElement("#root");

function UploadModal({ isOpen, onRequestClose }) {
  return (
    <Modal id="myModal" isOpen={isOpen} onRequestClose={onRequestClose}>
      <div class="modal-content">
        <div class="modal-text-head">Lorem ipsum dolor sit amet</div>
        <div class="modal-text-name">Lorem ipsum dolor sit amet</div>
        <div class="modal-text-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pretium, felis mollis imperdiet volutpat, orci lorem sodales lorem, ut
          condimentum mi tellus lobortis nunc. Nam commodo interdum porta.
          Integer rutrum id nunc ut interdum. Sed feugiat, quam vitae porttitor
          commodo, elit magna ornare urna, a laoreet est velit et tellus.
        </div>
        <button onClick={onRequestClose}>닫기</button>
      </div>
    </Modal>
  );
}

export default UploadModal;
