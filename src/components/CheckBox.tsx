import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { ReactNode } from "react";

interface CheckBoxProps {
  children?: ReactNode;
  checked: boolean;
  onCheckedChange?: () => void;
}

export const CheckBox = ({
  children,
  onCheckedChange,
  checked,
}: CheckBoxProps) => {
  return (
    <Checkbox.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      className="flex items-center gap-3 group"
    >
      <>
        <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
          <Checkbox.Indicator>
            <Check size={20} className="text-white" />
          </Checkbox.Indicator>
        </div>
        {children}
      </>
    </Checkbox.Root>
  );
};
