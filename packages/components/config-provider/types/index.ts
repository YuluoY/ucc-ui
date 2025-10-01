import type { Language, TranslatePair } from '@ucc-ui/locale'

export interface UConfigProviderProps {
  locale?: Language
  extendsI18nMsg?: TranslatePair
}