import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { LanguageSwitcher } from "~/components/layout";
import { Heading, List } from "~/components/reui";
import { Button, SectionHeadTitle } from "~/components/reui";

export default function Home() {
  const { t } = useTranslation("common");

  const listCategories = [
    { label: "Home", href: "/" },
    { label: "Category 2", href: "/" },
    { label: "Category 3", href: "/" },
    { label: "Category 4", href: "/" },
  ];

  return (
    <div className="container mx-auto flex flex-col gap-4 p-4">
      <div className="flex justify-end">
        <LanguageSwitcher />
      </div>

      <h1 className="font-inter text-4xl font-bold">{t("hello")}</h1>

      <ul>
        <li className="text-lg">{t("welcome", { name: "Next.js" })}</li>
        <li className="text-lg">{t("language.vietnamese")}</li>
        <li className="text-lg">{t("language.english")}</li>
      </ul>

      <Heading.H48 as={"h2"}>Design System</Heading.H48>

      <List items={listCategories} />

      <SectionHeadTitle title="Today's" heading="Flash Sales" />

      <Button>View All</Button>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  const res = await serverSideTranslations(locale, ["common"]);

  return {
    props: {
      ...res,
    },
  };
}
