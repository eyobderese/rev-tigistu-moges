import { getVideoId } from "../../../service/youtubeAPI";
import React from "react";
import Modal from "react-modal";

const VideoModal = ({ isOpen, onRequestClose, videoId }) => {
  console.log("the link is", videoId);

  videoId = getVideoId(videoId);
  console.log(videoId);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="YouTube Video"
      className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl md:mx-auto p-6 h-[70%] max-h-[400px] mx-5 z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
    >
      <button
        onClick={onRequestClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
      <div className="h-[100%] z-50">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </Modal>
  );
};

export default VideoModal;
