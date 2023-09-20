import { Album } from "@/api/dtoTypes";
import Link from "next/link";

interface AlbumSectionProps {
  albums: Album[];
}

const AlbumSection = (props: AlbumSectionProps) => {
  const { albums } = props;
  return (
    <div className="bg-primary my-20">
      <div className="px-8 lg:px-28 py-14 ">
        <h1 className="text-5xl my-12  italic text-accent mb-3">
          My Photo Albums
        </h1>
        <div>
          <div className="flex flex-col md:flex-row gap-3">
            {albums.length && albums.length > 0 ? (
              albums.map((a) => (
                <Link
                  href={"/account/albums?album=" + a.name}
                  className="w-full"
                  passHref
                  key={a.id}
                >
                  <div
                    style={{
                      backgroundImage: `url(${a.photos[0]?.url})`,
                    }}
                    className="bg-cover bg-center w-full h-72 p-8 flex items-end justify-end hover:cursor-pointer"
                  >
                    <h3
                      className={
                        "text-accent text-5xl  bg-secondary italic bg-opacity-30 rounded-lg w-fit p-2 h-fit"
                      }
                    >
                      {a.name}
                    </h3>
                  </div>
                </Link>
              ))
            ) : (
              <div className="min-h-[200px] flex justify-center items-center">
                No Ablums Yet
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumSection;
