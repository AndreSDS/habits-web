import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getHabitsSummary } from "../../lib/axios";
import { generateDaysFromYearBegining } from "../../utils/generate-days-from-year-begining";
import { HabitDay } from "../index";

const summaryDays = generateDaysFromYearBegining();
const minimumSummaryDaysSize = 18 * 7; // 18 weeks
const amountOfDaysToFill = minimumSummaryDaysSize - summaryDays.length;

type SummaryProps = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>;

export const DaysGrid = () => {
  const [summary, setSummary] = useState<SummaryProps>([]);

  useEffect(() => {
    (async () => {
      const data = await getHabitsSummary();
      setSummary(data);
    })();
  }, []);

  return (
    <>
      {summary.length >= 0 ? (
        <div className="grid grid-rows-7 grid-flow-col gap-3">
          {summaryDays.map((day, index) => {
            const dayInSummary = summary.find((dayInSummary) =>
              dayjs(day).isSame(dayInSummary.date, "day")
            );

            return (
              <HabitDay
                key={day.toString()}
                date={day}
                amount={dayInSummary?.amount}
                completed={dayInSummary?.completed}
              />
            );
          })}

          {amountOfDaysToFill > 0
            ? Array.from({ length: amountOfDaysToFill }).map((_, index) => (
                <div
                  key={`${index}`}
                  className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
                />
              ))
            : null}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};
