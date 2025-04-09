import { useFetch } from "../hooks/useFetch";
import React from "react";
import UserCard from "./UserCard";
import Button from "./Button";

export default function Authors({ url, className = "" }) {
  const { data, loading, error } = useFetch(url);

  if (loading) return <p>Cargando autores ...</p>;
  if (error) return <p>Error: {error}</p>;
  const topAuthors = data?.results?.slice(0, 3) || [];

  return (
    <section
      className={`w-full h-fit bg-backgray-color p-3 rounded-xl shadow-lg text-tertiary-color ${className}`}
    >
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Autores</h1>
        <Button variant="tertiary">Ver todo</Button>
      </div>
      <div className="flex flex-col gap-2 py-2">
        {topAuthors.length === 0 && (
          <p className="text-sm italic text-gray-500">
            No se encontraron autores.
          </p>
        )}
        {topAuthors.map(({ id, name, species, image, episode }, index) => (
          <React.Fragment key={id}>
            {index > 0 && <hr className="border-gray-300" />}
            <div className="flex justify-between items-center">
              <UserCard image={image} name={name} text={species} />
              <div className="flex flex justify-end items-center w-[35%] gap-2">
                <h2 className="font-light text-gray-500 text-[11px]">
                  Lectores
                </h2>
                <p className="text-2xl">{episode.length}k</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
