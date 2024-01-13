import React from "react";
import { useSelector } from "react-redux";

function MyShifts() {
  const bookedShifts = useSelector((state) => state.bookedShifts);

  const formatTime = (time) => {
    return new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <div className="m-10 py-5 border shadow-lg rounded-lg bg-white">
        <div className="content-container items-center justify-between">
          <div>
            {bookedShifts.map((shift) => (
              <>
                <h2 className="p-4 bg-gray-100 text-[#4F6C92] font-semibold">
                  {new Date(shift.startTime).toLocaleDateString([], {
                    weekday: "long",
                  })}
                </h2>
                <div className="flex justify-between p-4 text-[#004FB4] font-light ">
                  <div className="flex flex-col">
                    <p>
                      {formatTime(shift.startTime)} -{" "}
                      {formatTime(shift.endTime)}
                    </p>
                    <p> {shift.area} </p>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-transparent hover:bg-[#EED2DF] text-[#E2006A] font-semibold hover:text-[#E2006A] px-6 border border-[#DE93B3] hover:border-transparent rounded-3xl">
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyShifts;
