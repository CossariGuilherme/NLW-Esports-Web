interface Props {
    label: string;
    value: string;
    colorValue?: string;
}

export function DuoInfo({ label, value, colorValue = "#CCCCCC"  }: Props) {
  return (
    <div className="flex items-start flex-col gap-5 ">
        <span className="text-zinc-300 text-sm block">
            {label}
        </span>

       
        <span className="text-white text-sm font-bold block" style={{color: colorValue}}>
            {value}
        </span>
    </div>
  );
}