import NextLink from "next/link";

import { Typography } from "~/components/reui/typography";

type LinkProps = {
  label: string;
  href: string;
};

function Link({ label, href }: LinkProps) {
  return (
    <Typography
      size="16"
      weight="regular"
      as="li"
      className="underline-offset-4 hover:underline"
    >
      <NextLink href={href}>{label}</NextLink>
    </Typography>
  );
}

export { Link };
