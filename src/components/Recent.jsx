import Button from "./Button";

function RecentItem({ user, interaction, date, showSeparator }) {
  return (
    <>
      {showSeparator && <hr className="text-gray-300" />}{" "}
      {/* Separator between items, except the first one */}
      <div className="flex justify-between items-center py-2 text-xs">
        <p className="text-[11px] w-[70%]">
          <b>{user}</b> {interaction}
        </p>
        <p className="text-gray-500 text-xs">{date}</p>
      </div>
    </>
  );
}

export default function Recent({ data, className = "" }) {
  return (
    <section
      className={`w-full h-full bg-backgray-color p-3 rounded-xl shadow-lg text-tertiary-color ${className}`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Reciente</h1>
        <Button variant="tertiary">Ver todo</Button>
      </div>
      <div className="flex flex-col py-2 gap-2">
        {data.map((d, i) => (
          <RecentItem
            key={d.id}
            user={d.user}
            interaction={d.interaction}
            date={d.date}
            showSeparator={i > 0} // Show separator if it's not the first item
          />
        ))}
      </div>
    </section>
  );
}
