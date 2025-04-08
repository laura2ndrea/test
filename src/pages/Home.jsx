import users from "../data/users.json";
import banners from "../data/banners.json";
import recents from "../data/recents.json";
import books from "../data/books.json"
import Header from "../components/Header";
import Main from "../components/Main";
import Latest from "../components/Latest"

const user = users.find((u) => u.id === 1)
const url ="https://rickandmortyapi.com/api/character"

export default function Home( {className} ) {
    return (
        <div className={`fixed flex flex-col bg-red-500 w-full h-full overflow-auto ${className}`}>
            <Header user={user} className="md:flex-row md:justify-between md:items-center"/>
            <div className="grid grid-cols-1 bg-gray-500 sm:flex-row">
                <Main className="sm:basis-[64%] lg:basis-[70%] bg-orange-500" user={user} banners={banners} authors={url} recents={recents} />
                <Latest className="sm:basis-[36%] lg:basis-[30%]" data={books}/>
            </div>
        </div>
    );
}

/*import SearchBar from "../components/SearchBar";

export default function Home ({ className }) {
    return (
        <div className={`${className} flex w-[82%] h-[100%] rounded-l-[25px] shadow-2xl bg-white`}>
            <main className="basis-2/3 p-4 bg-yellow-500">
                <header className="w-[100%]">
                    <SearchBar />
                </header>
                <div className="flex flex-col p-4 pl-1 w-[100%] h-[95%] bg-purple-500">
                    <div className="bg-red-500 basis-1/4">hola</div>
                    <div className="bg-blue-500 basis-2/4 flex">
                        <div className="basis-2/3 bg-orange-500">
                            <div>hola</div>
                            <div>hola</div>
                        </div>
                        <div>holas</div>
                    </div>
                    <div className="bg-red-500 basis-1/4">hola</div>
                </div>
            </main>
            <aside className="basis-1/3 p-4">
                <header>

                </header>
                hola
            </aside>
        </div>
    );
}*/
/*
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import MiniCard from "../components/MiniCard";
import Authors from "../components/Authors";
import Recent from "../components/Recent";
import banners from "../data/banners.json";
import users from "../data/users.json";
import recents from "../data/recents.json";

const user = users.find((u) => u.id === 1)
const bannerOne = banners.find((b) => b.id === 1)

export default function Home({ className }) {
    return (
        <div className={`${className} flex w-[82%] rounded-l-[25px] h-screen shadow-2xl bg-yellow-500 overflow-auto pb-[17%]`}> 
            {/* Sección principal }
            <main className="flex-[2] p-4 flex flex-col gap-4 h-screen w-full">
                
                {/* Barra de búsqueda }
                <header className="w-full">
                    <SearchBar />
                </header>

                {/* Contenedor con distribución en grid }
                <section className="grid grid-rows-[1fr_2fr_1fr] gap-4 w-full h-full bg-purple-500 justify-items-center">
                    <Banner banner={bannerOne} className="bg-[#E9A763]"/>

                    <div className="bg-blue-500 flex gap-4 w-full">
                        <ContentBox className="flex-[2] bg-orange-500 flex flex-col">
                            <div className="flex justify-around w-full mb-5">
                                <MiniCard title="Librería" text={user.bookshelf}/>
                                <MiniCard title="Me gusta" text={user.likes + " k"}/>
                                <MiniCard title="Lectores" text={user.readers + " k"}/>
                                <MiniCard title="Opiniones" text={user.opinions + " k"}/>
                            </div>
                            <Authors url="https://rickandmortyapi.com/api/character"/>
                        </ContentBox>
                        <Recent data={recents} className="flex-[1]"/>
                    </div>

                    <Banner banner={bannerOne} className="bg-[#E9A763] mb-5"/>
                </section>
            </main>

            {/* Sidebar }
            <aside className="flex-[1] p-4">
                <header></header>
            </aside>
        </div>
    );
}

/* 📌 Componente reutilizable para las cajas de contenido 
function ContentBox({ children, className }) {{`${className} flex bg-red-500 w-[82%] h-full rounded-l-[25px] overflow-auto`}
    return <div className={`p-4 flex items-center justify-center ${className}`}>{children}</div>;
} */

{/*export default function Home({ className }) {
    return (
        <div className="">
            <div className="flex flex-col basis-2/3 h-fit bg-yellow-500">
                <div className="bg-gray-500 m-4 mt-3 p-2">SearchBar</div>
                <div className="flex flex-col bg-gray-500 m-2">
                    <div className="flex-[1] bg-amber-500 p-2 m-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum, mauris dictum pulvinar vestibulum, ligula dui scelerisque nisi, nec lacinia nisi lacus vel elit. In aliquam mauris id nunc rhoncus imperdiet ut in est. Maecenas vehicula a tortor id ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Vestibulum interdum aliquam finibus. Proin id suscipit neque, at faucibus ipsum. Ut et tellus in velit ultricies condimentum ac eget lacus. Maecenas porta dignissim feugiat. Nunc feugiat molestie scelerisque.
                    </div>
                    <div className="flex flex-[3] bg-lime-500 sm:flex-col">
                        <div className="flex flex-col flex-[2] bg-emerald-500">
                            <div className="flex flex-[1] justify-between bg-cyan-500">
                                <div className="aspect-square bg-indigo-500 m-2">Mini1</div>
                                <div className="aspect-square bg-indigo-500 m-2">Mini2</div>
                                <div className="aspect-square bg-indigo-500 m-2">Mini3</div>
                                <div className="aspect-square bg-indigo-500 m-2">Mini4</div>
                            </div>
                            <div className="flex-[2] bg-sky-500 m-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum, mauris dictum pulvinar vestibulum, ligula dui scelerisque nisi, nec lacinia nisi lacus vel elit. In aliquam mauris id nunc rhoncus imperdiet ut in est. Maecenas vehicula a tortor id ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Vestibulum interdum aliquam finibus. Proin id suscipit neque, at faucibus ipsum. Ut et tellus in velit ultricies condimentum ac eget lacus. Maecenas porta dignissim feugiat. Nunc feugiat molestie scelerisque.
                            Fusce bibendum massa in mollis mollis. Cras dolor mi, auctor non hendrerit id, consequat ac quam. Aliquam erat volutpat. Sed consequat suscipit lectus, et feugiat dui facilisis a. Quisque venenatis commodo urna, nec vulputate magna volutpat sit amet. Donec mollis feugiat semper. Quisque quam purus, consectetur id velit porttitor, euismod hendrerit eros.
                            </div>
                        </div>
                        <div className="flex-[1] bg-teal-500 m-2">Vertical</div>
                    </div>
                    <div className="flex-[1] bg-green-500 m-2 p-2">
                    Phasellus hendrerit leo orci, a varius enim elementum ut. Sed vulputate pretium metus, eget lobortis nunc vulputate et. Quisque id eleifend mi. Vestibulum vestibulum sapien sit amet posuere faucibus. Fusce molestie ante ex, sit amet convallis ante pulvinar vitae. Nulla facilisi. Ut eget imperdiet augue. Morbi porta enim eget diam mollis sagittis. Fusce interdum diam non pulvinar suscipit. Nullam id nisl sollicitudin, scelerisque sapien eget, cursus odio. Pellentesque lobortis, magna a vehicula ullamcorper, felis massa pellentesque lectus, in suscipit arcu urna nec tellus. Phasellus commodo mauris vel sapien varius ultricies. Vestibulum vel mi pharetra lorem tincidunt semper. Vestibulum cursus, magna eu sagittis porta, justo nisl venenatis purus, eget varius orci felis ut ante.

                    Ut in fringilla felis. Quisque condimentum imperdiet magna sed elementum. Integer imperdiet urna at augue fringilla tristique. Suspendisse luctus enim et diam mattis, vel iaculis tellus dapibus. In eget ipsum ut enim scelerisque porttitor. Suspendisse posuere nisl ut leo sollicitudin tincidunt. Nullam faucibus orci eget tincidunt imperdiet. Curabitur vitae dui luctus, accumsan libero a, scelerisque turpis. Curabitur nisl purus, mollis at feugiat sit amet, vulputate et magna. Nunc malesuada eu turpis at finibus. Mauris dolor ex, accumsan quis dui in, semper luctus eros. Mauris quis eros nibh. Etiam in posuere tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </div>
                </div>
            </div>
            <div className="flex flex-col basis-1/3 bg-blue-500 h-fit">
                <div className="flex justify-between bg-violet-500 m-4 mt-3 p-2 pb-0">
                    <div className="flex justify-start bg-white mr-2">
                        <div className="w-6 aspect-square m-1 bg-fuchsia-500">Ic1</div>
                        <div className="w-6 aspect-square m-1 bg-fuchsia-500">Ic2</div>
                    </div>
                    <div className="bg-pink-500">Nombre y foto</div>
                </div>
                <div className="bg-purple-500 m-2 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum, mauris dictum pulvinar vestibulum, ligula dui scelerisque nisi, nec lacinia nisi lacus vel elit. In aliquam mauris id nunc rhoncus imperdiet ut in est. Maecenas vehicula a tortor id ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Vestibulum interdum aliquam finibus. Proin id suscipit neque, at faucibus ipsum. Ut et tellus in velit ultricies condimentum ac eget lacus. Maecenas porta dignissim feugiat. Nunc feugiat molestie scelerisque.

                Aenean malesuada consequat fermentum. Phasellus et fringilla sapien. Vivamus egestas libero ex, non varius felis tempus sit amet. Sed vestibulum cursus leo at fermentum. Aenean sed magna ipsum. Nullam elementum dapibus magna, in varius nisl rutrum ac. Maecenas aliquet ac nunc nec porttitor. Ut eleifend tortor eu lacus mollis, pulvinar euismod dui condimentum.

                Fusce bibendum massa in mollis mollis. Cras dolor mi, auctor non hendrerit id, consequat ac quam. Aliquam erat volutpat. Sed consequat suscipit lectus, et feugiat dui facilisis a. Quisque venenatis commodo urna, nec vulputate magna volutpat sit amet. Donec mollis feugiat semper. Quisque quam purus, consectetur id velit porttitor, euismod hendrerit eros.

                Phasellus hendrerit leo orci, a varius enim elementum ut. Sed vulputate pretium metus, eget lobortis nunc vulputate et. Quisque id eleifend mi. Vestibulum vestibulum sapien sit amet posuere faucibus. Fusce molestie ante ex, sit amet convallis ante pulvinar vitae. Nulla facilisi. Ut eget imperdiet augue. Morbi porta enim eget diam mollis sagittis. Fusce interdum diam non pulvinar suscipit. Nullam id nisl sollicitudin, scelerisque sapien eget, cursus odio. Pellentesque lobortis, magna a vehicula ullamcorper, felis massa pellentesque lectus, in suscipit arcu urna nec tellus. Phasellus commodo mauris vel sapien varius ultricies. Vestibulum vel mi pharetra lorem tincidunt semper. Vestibulum cursus, magna eu sagittis porta, justo nisl venenatis purus, eget varius orci felis ut ante.
                </div>
            </div>
        </div>
    );
}*/}