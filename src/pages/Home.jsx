import users from "../data/users.json";
import banners from "../data/banners.json";
import recents from "../data/recents.json";
import books from "../data/books.json";
import Header from "../components/Header";
import Main from "../components/Main";
import Latest from "../components/Latest";

const user = users.find((u) => u.id === 1);
const url = "https://rickandmortyapi.com/api/character";

export default function Home({ className = "" }) {
  return (
    <div
      className={`fixed flex flex-col w-full h-full overflow-auto ${className}`}
    >
      <Header
        user={user}
        className="md:flex-row md:justify-between md:items-center"
      />
      <div className="grid grid-cols-1 h-fit bg-white xlg:grid-cols-[2fr_1fr] min-h-fit">
        {/* Main content and sidebar layout */}
        <Main
          user={user}
          banners={banners}
          authors={url}
          recents={recents}
        />
        <Latest data={books} />
      </div>
    </div>
  );
}
