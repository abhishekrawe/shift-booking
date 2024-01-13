import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function AvailableShifts() {
  const [myShifts, setMyShifts] = useState([]);
  const [activeArea, setActiveArea] = useState("Helsinki");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllRestaurantList = async () => {
      try {
        const res = await axios.get("http://localhost:8080/shifts ");
        setMyShifts(res.data);
        console.log("Availbale DATA", res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllRestaurantList();
  }, []);

  const bookShift = async (shiftId) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/shifts/${shiftId}/book`
      );
      console.log("Shift booked:", res.data);
      dispatch({ type: "BOOK_SHIFT", payload: res.data });
    } catch (err) {
      console.error("Error booking shift:", err);
    }
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

  const uniqueAreas = [...new Set(myShifts.map((shift) => shift.area))];

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else {
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      });
    }
  };

  const groupShiftsByDate = () => {
    const groupedShifts = {};

    myShifts
      .filter((shift) => shift.area === activeArea)
      .forEach((shift) => {
        const date = formatDateTime(shift.startTime);

        if (!groupedShifts[date]) {
          groupedShifts[date] = [];
        }

        groupedShifts[date].push(shift);
      });

    return groupedShifts;
  };

  const formatTime = (time) => {
    return new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // const isShiftBooked = (shift) => {
  //   return shift.status === "booked";
  // };

  // const isShiftInProgress = (shift) => {
  //   const now = new Date();
  //   return now >= new Date(shift.startTime) && now <= new Date(shift.endTime);
  // };

  // const isShiftOverlapping = (shift, otherShift) => {
  //   return (
  //     new Date(shift.startTime) < new Date(otherShift.endTime) &&
  //     new Date(shift.endTime) > new Date(otherShift.startTime)
  //   );
  // };

  // const getButtonText = (shift) => {
  //   if (isShiftBooked(shift)) {
  //     return "Booked";
  //   } else if (isShiftInProgress(shift)) {
  //     return "Shift in Progress";
  //   } else {
  //     const overlappingShift = myShifts.find(
  //       (otherShift) =>
  //         otherShift.id !== shift.id && isShiftOverlapping(shift, otherShift)
  //     );
  //     return overlappingShift ? "Overlapping times" : "Book";
  //   }
  // };


  const groupedShifts = groupShiftsByDate();

  return (
    <div className="m-10 w-full md:w-1/2 sm:1/2 p-4 mx-auto text-center py-5 border shadow-lg rounded-lg bg-white">
      <div className="tabs-container flex justify-center">
        {uniqueAreas.map((area, index) => (
          <div
            key={index}
            className={`px-10 pb-4 tab font-semibold ${
              area === activeArea ? "text-[#004FB4] active" : "text-[#A4B8D3]"
            }`}
            onClick={() => setActiveArea(area)}>
            {area}({area.length})
          </div>
        ))}
      </div>
      <div className="content-container items-center justify-between">
        {activeArea &&
          Object.keys(groupedShifts).map((date, dateIndex) => (
            <div key={dateIndex}>
              <h2 className="p-4 bg-gray-100 text-[#4F6C92] font-semibold text-left">
                {date}
              </h2>

              {groupedShifts[date].map((shift, shiftIndex) => (
                <>
                  <div
                    key={shiftIndex}
                    className="flex justify-between p-4 text-[#004FB4] font-light ">
                    <p>
                      {formatTime(shift.startTime)} -{" "}
                      {formatTime(shift.endTime)}
                    </p>
                    <div className="flex gap-4">
                      <button
                        className="bg-transparent hover:bg-[#CAEFD8] text-[#16A64D] font-semibold hover:text-[#16A64D] px-6 border border-[#55CB82] hover:border-transparent rounded-3xl"
                        onClick={() => bookShift(shift.id)}>
                        Book
                      </button>
                      <button
                        className="bg-transparent hover:bg-[#EED2DF] text-[#E2006A] font-semibold hover:text-[#E2006A] px-6 border border-[#DE93B3] hover:border-transparent rounded-3xl"
                        onClick={() => cancelShift(shift.id)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default AvailableShifts;
