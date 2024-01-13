import React from "react";
import { useSelector , useDispatch } from "react-redux";
import axios from "axios";


function MyShifts() {
  const bookedShifts = useSelector((state) => state.bookedShifts);
  const dispatch = useDispatch();

  const formatTime = (time) => {
    return new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

   const cancelShift = async (shiftId) => {
     try {
       const res = await axios.get(
         `http://localhost:8080/shifts/${shiftId}/cancel`
       );
       console.log("Shift canceled:", res.data);
       dispatch({ type: "CANCEL_SHIFT", payload: { id: shiftId } });
     } catch (err) {
       console.error("Error cancelling shift:", err);
     }
   };

  return (
    <>
      <div className="m-10 w-full md:w-1/2 sm:1/2 p-4 mx-auto text-center py-5 border shadow-lg rounded-lg bg-white">
        <div className="content-container items-center justify-between">
          <div>
            {bookedShifts.map((shift, index) => (
              <div key={index}>
                <h2 className="p-4 bg-gray-100 text-[#4F6C92] font-semibold text-left">
                  {new Date(shift.startTime).toLocaleDateString([], {
                    weekday: "long",
                  })}
                </h2>
                <div className="flex justify-between p-4 text-[#004FB4] font-light ">
                  <div className="flex flex-col text-left">
                    <p>
                      {formatTime(shift.startTime)} -{" "}
                      {formatTime(shift.endTime)}
                    </p>
                    <p> {shift.area} </p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => cancelShift(shift.id)}
                      className="bg-transparent hover:bg-[#EED2DF] text-[#E2006A] font-semibold hover:text-[#E2006A] px-6 border border-[#DE93B3] hover:border-transparent rounded-3xl">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyShifts;
