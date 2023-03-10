import { DaysGrid } from "../index";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export const Summarytable = () => {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => (
          <div
            key={`${weekDay}-${index + 1}`}
            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
          >
            {weekDay}
          </div>
        ))}
      </div>

      <DaysGrid />
    </div>
  );
};
