import React, { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";
import { CheckIcon, DeleteIcon, StarIcon } from "lucide-react";
import { kConverter } from "./../../lib/kConverter";

const AddShows = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [showPrice, setShowPrice] = useState("");

  const fetchNowPlayingMovies = async () => {
    setNowPlayingMovies(dummyShowsData);
  };

  const handleDateTimeAdd = () => {
    if (!dateTimeInput) return;
    const [date, time] = dateTimeInput.split("T");
    if (!date || !time) return;

    setDateTimeSelection((prev) => {
      const times = prev[date] || [];
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] };
      }
    });
  };

  const handleRemoveTime = (date, time) => {
    setDateTimeSelection((prev) => {
      const filteredTimes = prev[date].filter((t) => t !== time);
      if (filteredTimes.length === 0) {
        const { [date]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [date]: filteredTimes };
    });
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  return nowPlayingMovies.length > 0 ? (
    <>
      <div>
        <Title text1="Add" text2="Shows" />
        <p className="mt-10 text-lg font-medium">Now Playing Movies</p>
        <div className="overflow-x-auto pb-4">
          <div className="group mt-4 flex w-max flex-wrap gap-4">
            {nowPlayingMovies.map((movie) => (
              <div
                key={movie.id}
                className={`relative max-w-40 cursor-pointer transition duration-300 group-hover:not-hover:opacity-40 hover:-translate-y-1`}
                onClick={() => setSelectedMovie(movie.id)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={movie.poster_path}
                    alt="movies"
                    className="w-full object-cover brightness-90"
                  />
                  <div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-black/70 p-2 text-sm">
                    <p className="flex items-center gap-1 text-gray-400">
                      <StarIcon className="text-primary fill-primary h-4 w-4" />
                      {movie.vote_average.toFixed(1)}
                    </p>
                    <p className="text-gray-300">
                      {kConverter(movie.vote_count)} Votes
                    </p>
                  </div>
                </div>
                {selectedMovie === movie.id && (
                  <div className="bg-primary absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded">
                    <CheckIcon
                      className="h-4 w-4 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                )}

                <p className="truncate font-medium">{movie.title}</p>
                <p className="text-sm text-gray-400">{movie.release_date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Show Price input */}
      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium">Show Price</label>
        <div className="inline-flex items-center gap-2 rounded-md border border-gray-600 px-3 py-2">
          <p className="text-sm text-gray-400">{currency}</p>
          <input
            type="number"
            min={0}
            onChange={(e) => setShowPrice(e.target.value)}
            value={showPrice}
            placeholder="Enter show price"
            className="outline-none"
          />
        </div>
      </div>

      {/* Date and Time Selection */}
      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium">
          Select Date and Time
        </label>
        <div className="inline-flex gap-5 rounded-lg border border-gray-600 p-1 pl-3">
          <input
            type="datetime-local"
            value={dateTimeInput}
            onChange={(e) => setDateTimeInput(e.target.value)}
            className="rounded-md outline-none"
          />
          <button
            className="bg-primary/80 hover:bg-primary cursor-pointer rounded-lg px-3 py-2 text-sm text-white"
            onClick={handleDateTimeAdd}
          >
            Add Time
          </button>
        </div>
      </div>

      {/* Display selected time */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className="mt-6">
          <h2 className="mb-2">Selected Date-Time</h2>
          <ul className="space-y-3">
            {Object.entries(dateTimeSelection).map(([date, times]) => (
              <li key={date}>
                <div className="font-medium">{date}</div>
                <div className="mt-1 flex flex-wrap gap-2 text-sm">
                  {times.map((time) => (
                    <div
                      key={time}
                      className="border-primary flex items-center rounded border px-2 py-1"
                    >
                      <span>{time}</span>
                      <DeleteIcon
                        onClick={() => handleRemoveTime(date, time)}
                        width={15}
                        className="ml-2 cursor-pointer text-red-500 hover:text-red-700"
                      />
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button className="bg-primary/80 hover:bg-primary mt-6 cursor-pointer rounded px-8 py-2 text-white transition-all active:scale-95">
        Add Show
      </button>
    </>
  ) : (
    <Loading />
  );
};

export default AddShows;
