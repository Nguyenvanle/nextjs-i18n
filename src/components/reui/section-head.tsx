import { cn } from "~/libs";

import { Heading, Typography } from "~/components/reui/typography";

type SectionHeadProps = {
  title: string;
  className?: string;
  id?: string;
};

function SectionHead({ title, className, id }: SectionHeadProps) {
  return (
    <div id={id} className={cn("flex items-center gap-4", className)}>
      <div className="h-10 w-5 rounded bg-primary" />

      <Typography
        size="16"
        weight="semibold"
        className="text-primary"
        as="span"
      >
        {title}
      </Typography>
    </div>
  );
}

type SectionHeadTitleProps = {
  heading: string;
} & SectionHeadProps;

function SectionHeadTitle({
  title,
  className,
  id,
  heading,
}: SectionHeadTitleProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <SectionHead id={id} title={title} />

      <Heading.H36 as={"h3"}>{heading}</Heading.H36>
    </div>
  );
}

export { SectionHead, SectionHeadTitle };
