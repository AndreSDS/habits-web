import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";
import { createHabit } from "../../lib/axios";
import { CheckBox } from "../CheckBox";

const availableweekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

type FormDataProps = {
  title: string;
  weekDays: number[];
};

export const NewHabitForm = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    title: "",
    weekDays: [],
  });

  const { title, weekDays } = formData;

  async function createNewHabit(event: FormEvent) {
    event.preventDefault();

    if (!title || weekDays.length === 0) {
      return;
    }

    await createHabit({
      title,
      weekDays,
    });

    setFormData({
      title: "",
      weekDays: [],
    });
  }

  function handleToggleweekday(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const newWeekDays = weekDays.filter((day) => day !== weekDay);
      setFormData((prev) => ({ ...prev, weekDays: newWeekDays }));
    } else {
      setFormData((prev) => ({ ...prev, weekDays: [...weekDays, weekDay] }));
    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento
      </label>

      <input
        type="text"
        id="title"
        value={title}
        autoFocus
        onChange={(event) =>
          setFormData({ ...formData, title: event.target.value })
        }
        placeholder="e.: Exercícios, dormir bem, etc..."
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
      />

      <label className="font-semibold leading-tight mt-4" htmlFor="">
        Qual sua recorrência?
      </label>

      <div className="flex flex-col gap-2 mt-3">
        {availableweekDays.map((weekDay, index) => (
          <CheckBox
            key={weekDay}
            checked={weekDays.includes(index)}
            onCheckedChange={() => handleToggleweekday(index)}
          >
            <span className="text-white leading-tight">{weekDay}</span>
          </CheckBox>
        ))}
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
};
