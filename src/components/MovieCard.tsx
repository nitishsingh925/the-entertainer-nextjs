import { IMG_CDN_URL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  posterPath: string | null;
  title: string | null;
  release_date: string | null;
  id: number | null;
}

const MovieCard: React.FC<MovieCardProps> = ({
  posterPath,
  title,
  release_date,
  id,
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
      <Link href={`movie/${id}`} prefetch>
        <Image
          src={IMG_CDN_URL + posterPath}
          alt="movies Image"
          className="rounded-lg"
          width={250}
          height={350}
        />
      </Link>
      <Link href={`movie/${id}`} prefetch>
        <h1 className="text-white truncate hover:text-neutral-600">{title}</h1>
      </Link>
      <h3 className="text-gray-200">{formatDate(release_date)}</h3>
    </div>
  );
};

export default MovieCard;
