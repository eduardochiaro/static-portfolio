type Props = {
  title: string;
  list: {
    title: string;
    value: string;
    color?: string; // Optional color property for custom styling
  }[];
  titleColor: string;
};

export default function SideModule({ title, list, titleColor }: Props) {
  return (
    <section className="mb-16 px-4 md:px-0">
      <h2 className={`border-l-4 pl-4 text-xl font-bold uppercase md:-ml-6 ${titleColor}`}>{title}</h2>
      <div className="mb-8 text-sm">
        <ul className="space-y-2">
          {list.map((item, index) => (
            <li key={index} className="flex justify-between gap-4">
              <span>{item.title}</span>
              <span className={`${item.color} shrink-0 text-right`}>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
