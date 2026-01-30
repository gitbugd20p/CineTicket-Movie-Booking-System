import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyDateTimeData, dummyShowsData } from "../assets/assets";
import Loading from "../components/Loading";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import isoTimeFormat from "./../lib/isoTimeFormat";
import BlurCircle from "../components/BlurCircle";
import toast from "react-hot-toast";

const SeatLayout = () => {
  const groupRows = [
    ["A", "B"],
    ["C", "D"],
    ["E", "F"],
    ["G", "H"],
    ["I", "J"],
  ];

  const { id, date } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  const navigate = useNavigate();

  const getShow = async () => {
    const show = dummyShowsData.find((show) => show._id === id);
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData,
      });
    }
  };

  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast("Please select time first!");
    }

    if (!selectedSeats.includes(seatId) && selectedSeats.length > 4) {
      return toast("You can select 5 seats at max!");
    }

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId],
    );
  };

  const renderSeats = (row, count = 9) => (
    <div key={row} className="mt-2 flex gap-2">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: count }, (_, index) => {
          const seatId = `${row}${index + 1}`;
          return (
            <button
              key={seatId}
              onClick={() => handleSeatClick(seatId)}
              className={`border-primary/60 h-8 w-8 cursor-pointer rounded border ${selectedSeats.includes(seatId) && "bg-primary text-white"}`}
            >
              {seatId}
            </button>
          );
        })}
      </div>
    </div>
  );

  useEffect(() => {
    getShow();
  }, [id, date]);

  return show ? (
    <div className="flex flex-col px-6 py-30 md:flex-row md:px-16 md:pt-50 lg:px-40">
      {/* Available Timings */}
      <div className="bg-primary/10 border-primary/20 h-max w-60 rounded-lg border py-10 md:sticky md:top-30">
        <p className="px-6 text-lg font-semibold">Available Timings</p>
        <div className="mt-5 space-y-1">
          {show.dateTime[date].map((item) => (
            <div
              className={`flex w-max cursor-pointer items-center gap-2 rounded-r-md px-6 py-2 transition ${selectedTime?.time === item.time ? "bg-primary text-white" : "hover:bg-primary/20"}`}
              key={item.time}
              onClick={() => setSelectedTime(item)}
            >
              <ClockIcon className="h-4 w-4" />
              <p className="text-sm">{isoTimeFormat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seats Layouts */}
      <div className="relative flex flex-1 flex-col items-center max-md:mt-16">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle bottom="0" right="0" />
        <h1 className="mb-4 text-2xl font-semibold">Select your seat</h1>
        <img src={assets.screenImage} alt="screen" />
        <p className="mb-6 text-sm text-gray-400">SCREEN SIDE</p>

        {/* seat rows */}
        <div className="mt-10 flex flex-col items-center text-xs text-gray-300">
          <div className="mb-6 grid grid-cols-2 gap-8 md:grid-cols-1 md:gap-2">
            {groupRows[0].map((row) => renderSeats(row))}
          </div>

          <div className="grid grid-cols-2 gap-11">
            {groupRows.slice(1).map((group, idx) => (
              <div key={idx}>{group.map((row) => renderSeats(row))}</div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate("/my-bookings")}
          className="bg-primary hover:bg-primary-dull mt-20 flex cursor-pointer items-center gap-1 rounded-full px-10 py-3 text-sm font-medium transition active:scale-95"
        >
          Proceed to Checkout{" "}
          <ArrowRightIcon strokeWidth={3} className="h-4 w-4" />
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default SeatLayout;
