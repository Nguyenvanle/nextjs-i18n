import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";

import { ChevronDown } from "lucide-react";

import { poppins } from "~/constants";

import { Typography } from "~/components/reui";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui";

function LanguageSwitcher() {
  const router = useRouter();
  const { i18n, t } = useTranslation("common");

  const handleLanguageChange = (newLocale: string) => {
    const { pathname, asPath, query } = router;

    router.push(
      {
        pathname,
        query,
      },
      asPath,
      { locale: newLocale }
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex gap-2 px-2">
          <Typography size={"14"}>
            {i18n.language === "vi"
              ? t("language.vietnamese")
              : t("language.english")}
          </Typography>
          <ChevronDown className="size-3.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {router.locales?.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onSelect={() => handleLanguageChange(locale)}
            className={poppins.variable}
          >
            {locale === "vi" ? t("language.vietnamese") : t("language.english")}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { LanguageSwitcher };
