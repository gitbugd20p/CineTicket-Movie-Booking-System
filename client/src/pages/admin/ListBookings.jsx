import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { dummyBookingData } from "../../assets/assets";
import Title from "../../components/admin/Title";
import dateFormat from "../../lib/dateFormat";

const ListBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllBookings = async () => {
    setBookings(dummyBookingData);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllBookings();
  }, []);
  return !isLoading ? (
    <div>
      <Title text1="List" text2="Bookings" />
      <div className="mt-6 max-w-4xl overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-md text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 pl-5 font-medium">User Name</th>
              <th className="p-2 font-medium">Movie Name</th>
              <th className="p-2 font-medium">Show Time</th>
              <th className="p-2 font-medium">Seats</th>
              <th className="p-2 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((item, index) => (
              <tr
                key={index}
                className="border-primary/20 bg-primary/5 even:bg-primary/10 border-b"
              >
                <td className="min-w-45 p-2 pl-5">{item.user.name}</td>
                <td className="p-2">{item.show.movie.title}</td>
                <td className="p-2">{dateFormat(item.show.showDateTime)}</td>
                <td className="p-2">
                  {Object.keys(item.bookedSeats)
                    .map((seat) => item.bookedSeats[seat])
                    .join(", ")}
                </td>
                <td className="p-2">
                  {currency}
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default ListBookings;
