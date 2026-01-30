import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
import BlurCircle from "../components/BlurCircle";
import { Heart, PlayCircleIcon, StarIcon } from "lucide-react";
import timeFormat from "../lib/timeFormat";
import DateSelect from "../components/DateSelect";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  const getShow = async () => {
    const show = dummyShowsData.find((show) => show._id == id);
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData,
      });
    }
  };

  useEffect(() => {
    getShow();
  }, [id]);
  return show ? (
    <div className="px-6 pt-30 md:px-16 md:pt-50 lg:px-40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row">
        <img
          src={show.movie.poster_path}
          alt=""
          className="h-104 max-w-70 rounded-xl object-cover max-md:mx-auto"
        />

        <div className="relative flex flex-col gap-3">
          <BlurCircle top="-100px" left="-100px" />
          <p className="text-primary uppercase">English</p>

          <h1 className="max-w-96 text-4xl font-semibold text-balance">
            {show.movie.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-300">
            <StarIcon className="text-primary fill-primary h-5 w-5" />{" "}
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>

          <p className="mt-2 max-w-xl text-sm leading-tight text-gray-400">
            {show.movie.overview}
          </p>

          <p>
            {timeFormat(show.movie.runtime)} ●{" "}
            {show.movie.genres.map((genre) => genre.name).join(", ")} ●{" "}
            {show.movie.release_date.split("-")[0]}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button className="flex cursor-pointer items-center gap-2 rounded-md bg-gray-800 px-7 py-3 text-sm font-medium transition hover:bg-gray-900 active:scale-95">
              <PlayCircleIcon className="h-5 w-5" /> Watch Trailer
            </button>
            <a
              href="#dateSelect"
              className="bg-primary hover:bg-primary-dull cursor-pointer rounded-md px-10 py-3 text-sm font-medium transition active:scale-95"
            >
              Buy Tickets
            </a>
            <button className="cursor-pointer rounded-full bg-gray-700 p-2.5 transition active:scale-95">
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <p>Your Favorite Casts</p>
      <div className="no-scrollbar mt-8 overflow-x-auto pb-4">
        <div className="flex w-max items-center gap-4 px-4">
          {show.movie.casts.slice(0, 12).map((cast, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {" "}
              <img
                src={cast.profile_path}
                alt=""
                className="aspect-square h-20 rounded-full object-cover md:h-20"
              />
              <p className="mt-3 text-xs font-medium">{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      <DateSelect dateTime={show.dateTime} id={id} />

      <h3 className="mt-20 mb-8 text-lg font-medium">You May Also Like</h3>
      <div className="flex flex-wrap gap-8 max-sm:justify-center">
        {dummyShowsData.slice(0, 4).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <button
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className="bg-primary hover:bg-primary-dull cursor-pointer rounded-md px-10 py-3 text-sm font-medium transition"
        >
          Show more
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
