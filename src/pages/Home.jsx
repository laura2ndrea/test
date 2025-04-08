import users from "../data/users.json";
import banners from "../data/banners.json";
import recents from "../data/recents.json";
import books from "../data/books.json";
import Header from "../components/Header";
import Main from "../components/Main";
import Latest from "../components/Latest";

const user = users.find((u) => u.id === 1);
const url = "https://rickandmortyapi.com/api/character";

export default function Home({ className }) {
  return (
    <div
      className={`fixed flex flex-col bg-red-500 w-full h-full overflow-auto ${className}`}
    >
      <Header
        user={user}
        className="md:flex-row md:justify-between md:items-center"
      />
      <div className="grid grid-cols-1 bg-gray-500 sm:flex-row">
        <Main
          className="sm:basis-[64%] lg:basis-[70%] bg-orange-500"
          user={user}
          banners={banners}
          authors={url}
          recents={recents}
        />
        <Latest className="sm:basis-[36%] lg:basis-[30%]" data={books} />
      </div>
    </div>
  );
}
