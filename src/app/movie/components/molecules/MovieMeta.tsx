import Text from "@/components/atoms/Text";

const MovieMeta: React.FC<{ director: string[]; writers: string[], genres: string[] }> = ({ director, writers, genres }) => {
  return (
    <div className="mt-4 w-3/4 flex flex-col gap-2">
      <div className="flex space-x-2">
        {genres.map((genre) => (
          <Text variant="subtitle" key={genre} customStyle="bg-transparent border-gray-300 border-[1px] text-gray-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
            {genre}
          </Text>
        ))}
      </div>
      <div className="divide-y divide-gray-300 flex flex-col gap-2 pr-4">
        <Text variant="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          And some more text here.
        </Text>
        <Text variant="body" customStyle="pt-2">Directed by {director}</Text>
        <Text variant="body" customStyle="pt-2">Written by {writers.join(', ')}</Text>
        <Text variant="body" customStyle="pt-2">Written by {writers.join(', ')}</Text>
      </div>
    </div>
  );
};

export default MovieMeta;
