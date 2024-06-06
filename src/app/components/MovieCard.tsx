import { IMG_CDN_URL } from "@/utils/constants";

interface MovieCardProps {
  posterPath: string | null;
  title: string | null;
  release_date: string | null;
}

const MovieCard: React.FC<MovieCardProps> = ({
  posterPath,
  title,
  release_date,
}) => {
  if (!posterPath) return null;

  // Function to format the date as "DD-MM-YYYY"
  const formatDate = (dateString: string | null): string => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}-${month.toString()}-${year}`;
  };

  return (
    <div className="w-36 mr-4 bg-neutral-500 bg-opacity-10  rounded-lg shadow-lg">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="movies Image"
        className="rounded-lg"
      />
      <h1 className="text-white truncate">{title}</h1>
      <h3 className="text-gray-200">{formatDate(release_date)}</h3>
    </div>
  );
};

export default MovieCard;
