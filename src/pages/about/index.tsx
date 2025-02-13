import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { LanguageSwitcher } from "~/components/layout";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <div className="container m-auto p-4">
      <h1 className="font-inter text-4xl font-bold">{t("hello")}</h1>
      <p className="font-poppins text-lg">
        {t("welcome", { name: "Next.js" })}
      </p>

      <LanguageSwitcher />
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
}
