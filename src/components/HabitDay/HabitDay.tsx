import clsx from "clsx";
import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "../ProgressBar";

interface HabitdayProps {
  completed: number;
  amount: number;
}

export const HabitDay = ({ amount, completed }: HabitdayProps) => {
  const completedPercentage = Math.round((completed / amount) * 100);

  const bgColorByCompletedPercentage = (completedPercentage: number) => {
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
          "w-10 h-10border-2 rounded-lg",
          bgColorByCompletedPercentage(completedPercentage)
        )}
      ></Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">terça-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            17/01
          </span>

          <ProgressBar progress={completedPercentage} />

          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
