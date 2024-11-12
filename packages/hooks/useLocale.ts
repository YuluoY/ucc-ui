import { inject, type Ref } from "vue";
import type { Language } from "../locale";
import { omit } from "lodash-es";
import { createI18n, i18nSymbol, type I18nInstance } from "vue3-i18n";
import En from "@ucc-ui/locale/lang/en";

export default function useLocale(localeOverrides?: Ref<Language>) {
  if (!localeOverrides) {
    return omit(
      <I18nInstance>(
        inject(
          i18nSymbol,
          createI18n({ locale: En.name, messages: { en: En.el } })
        )
      ),
      "install"
    );
  }

  return omit(
    createI18n({
      locale: localeOverrides.value.name,
      messages: { en: En.el, [localeOverrides.value.name]: localeOverrides.value.el },
    }),
    'install'
  );
}