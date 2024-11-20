import { inject, type Ref } from "vue";
import type { Language } from "../locale";
import { omit } from "lodash-es";
import { createI18n, i18nSymbol, type I18nInstance } from "vue3-i18n";
import DefLang from "@ucc-ui/locale/lang/zh-cn";

const DEFAULT_LANG = 'zh-cn'

export default function useLocale(localeOverrides?: Ref<Language>) {
  if (!localeOverrides) {
    return omit(
      <I18nInstance>(
        inject(
          i18nSymbol,
          createI18n({ locale: DefLang.name, messages: { [DEFAULT_LANG]: DefLang.el } })
        )
      ),
      "install"
    );
  }

  return omit(
    createI18n({
      locale: localeOverrides.value.name,
      messages: { [DEFAULT_LANG]: DefLang.el, [localeOverrides.value.name]: localeOverrides.value.el },
    }),
    'install'
  );
}