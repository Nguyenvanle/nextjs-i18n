import { Link } from "~/components/reui/link";

type ListProps = {
  items: { label: string; href: string }[];
  className?: string;
};

function List({ items, className }: ListProps) {
  return (
    <ul className={`flex flex-col gap-4 ${className ?? ""}`}>
      {items.map((item, index) => (
        <Link key={index} {...item} />
      ))}
    </ul>
  );
}

export { List };
