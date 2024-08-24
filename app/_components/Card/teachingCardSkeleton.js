function TeachingCardSkeleton() {
  return (
    <div className="flex flex-col p-2 max-w-[600px] gap-3 mt-5 animate-pulse">
      <div className="rounded-3xl bg-gray-300 h-[200px] w-full" />{" "}
      {/* Adjusted height */}
      <div className="flex gap-3 w">
        <div className="w-16 h-16 rounded-full overflow-hidden min-w-[60px] min-h-[60px] bg-gray-300" />

        <div className="flex flex-col">
          <p className="text-[24px] leading-[27.84px] md:text-[30px] md:leading-[34.8px]  lg:text-[36px] lg:leading-[41.76px] font-bold align-middle bg-gray-300 w-1/4 h-6"></p>
          {/* Adjusted height */}
          <p className="opacity-70 text-[16px] leading-[18px] bg-gray-300 min-w-1/2 h-4"></p>
        </div>
      </div>
    </div>
  );
}

export default TeachingCardSkeleton;
