import { Children } from "react";
import Line from "../Line/line";
import Button from "../Button/button";

function Teaching({ children, buttonHidden }) {
  return (
    <div className="mx-4 my-8">
      <p className="text-2xl font-bold  mx-2">Teachings</p>
      <Line className="md:w-1/2 mx-1  mx-2" />
      <p className="text-lg">Teaching From YouTube</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {children}
      </div>
      {!buttonHidden && (
        <div className="flex justify-center">
          <Button to="/teaching">View More Video</Button>
        </div>
      )}
    </div>
  );
}

export default Teaching;
