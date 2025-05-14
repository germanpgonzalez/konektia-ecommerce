export const SkeletonCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 text-center flex flex-col justify-center items-center animate-pulse">
      <div className="w-32 h-68 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="flex gap-2 pt-4 mt-5">
        <div className="h-8 w-20 bg-gray-300 rounded-2xl"></div>
        <div className="h-8 w-24 bg-gray-300 rounded-2xl"></div>
      </div>
    </div>
  );
};
