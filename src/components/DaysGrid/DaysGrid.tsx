import { generateDaysFromYearBegining } from "../../utils/generate-days-from-year-begining";
import { HabitDay } from "../index";

const summaryDays = generateDaysFromYearBegining();
const minimumSummaryDaysSize = 18 * 7; // 18 weeks
const amountOfDaysToFill = minimumSummaryDaysSize - summaryDays.length;

export const DaysGrid = () => {
  return (
    <div className="grid grid-rows-7 grid-flow-col gap-3">
      {summaryDays.map((day, index) => (
        <HabitDay
          key={day.toString()}
          amount={8}
          completed={Math.round(Math.random() * 5)}
        />
      ))}

      {amountOfDaysToFill > 0
        ? Array.from({ length: amountOfDaysToFill }).map((_, index) => (
            <div
              key={`${index}`}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          ))
        : null}
    </div>
  );
};
