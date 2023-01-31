import clsx from "clsx";
import * as Popover from "@radix-ui/react-popover";

import { ProgressBar } from "../ProgressBar";
import { Check } from "phosphor-react";
import { CheckBox } from "../CheckBox";
import dayjs from "dayjs";

interface HabitdayProps {
  date: Date;
  completed?: number;
  amount?: number;
}

export const HabitDay = ({
  amount = 0,
  completed = 0,
  date,
}: HabitdayProps) => {
  const completedPercentage =
    amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format("DD/MM");
  const dayOfWeek = dayjs(date).format("dddd");

  const bgColorByCompletedPercentage = () => {
    switch (true) {
      case completedPercentage === 0:
        return "bg-zinc-900 border-zinc-800";
      case completedPercentage > 0 && completedPercentage < 20:
        return "bg-violet-900 border-violet-700";
      case completedPercentage >= 20 && completedPercentage < 40:
        return "bg-violet-800 border-violet-600";
      case completedPercentage >= 40 && completedPercentage < 60:
        return "bg-violet-700 border-violet-500";
      case completedPercentage >= 60 && completedPercentage < 80:
        return "bg-violet-600 border-violet-500";
      case completedPercentage >= 80:
        return "bg-violet-500 border-violet-400";
      default:
        return "bg-zinc-900 border-zinc-800";
    }
  };

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "w-10 h-10 border-2 rounded-lg",
          bgColorByCompletedPercentage()
        )}
      ></Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            {dayAndMonth}
          </span>

          <ProgressBar progress={completedPercentage} />

          <div className="mt-6 flex flex-col gap-3">
            <CheckBox>
              <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:text-zinc-400 group-data-[state=checked]:line-through">
                Berber 2L de água
              </span>
            </CheckBox>
          </div>

          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
