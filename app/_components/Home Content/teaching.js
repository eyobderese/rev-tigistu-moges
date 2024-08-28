"use client";
import { useState } from "react";
import Line from "../Line/line";
import Button from "../Button/button";
import TeachingCard from "../Card/teachingCard";
import VideoModal from "../videoModal/videoModal";

function Teaching({ buttonHidden, content }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const openModal = (videoId) => {
    setSelectedVideoId(videoId);
    setIsModalOpen(true);
    console.log("videoId", videoId, "modal is:", isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideoId(null);
  };

  return (
    <div className="mx-4 my-8">
      <p className="text-[24px] leading-[27.84px] md:text-[30px] md:leading-[34.8px]  lg:text-[36px] lg:leading-[41.76px] font-bold align-middle ">
        Teachings
      </p>
      <Line className="my-5 text-[16px] leading-[16.32px] md:text-[17px] md:leading-[23.8px]" />
      <p className="text-lg">{content.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {content.videoDetails.map((info) => (
          <TeachingCard
            content={info}
            logo={content.logo}
            key={info.id}
            onClick={() => openModal(info.url)} // Use the correct video ID here
          />
        ))}
      </div>
      {!buttonHidden && (
        <div className="flex justify-center">
          <Button to="/teaching" pageName="Teaching">
            View More Video
          </Button>
        </div>
      )}
      {isModalOpen && (
        <VideoModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          videoId={selectedVideoId}
        />
      )}
    </div>
  );
}

export default Teaching;
