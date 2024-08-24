import TeachingCardSkeleton from "../Card/teachingCardSkeleton"; // Import the skeleton loader

function TeachingSkeleton() {
  return (
    <div className="mx-4 my-8 animate-pulse">
      <p className="text-[24px] leading-[27.84px] md:text-[30px] md:leading-[34.8px]  lg:text-[36px] lg:leading-[41.76px] font-bold align-middle bg-gray-300 w-1/4 h-6"></p>
      <div className="my-5 text-[16px] leading-[16.32px] md:text-[17px] md:leading-[23.8px] bg-gray-300 w-1/2 h-4"></div>
      <p className="text-lg bg-gray-300 w-3/4 h-4"></p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        <TeachingCardSkeleton />
        <TeachingCardSkeleton />
        <TeachingCardSkeleton />
        <TeachingCardSkeleton />
        <TeachingCardSkeleton />
        <TeachingCardSkeleton />
        <TeachingCardSkeleton />
        <TeachingCardSkeleton />
      </div>
      <div className="flex justify-center">
        <div className="bg-gray-300 w-1/4 h-10"></div>
      </div>
    </div>
  );
}

export default TeachingSkeleton;
