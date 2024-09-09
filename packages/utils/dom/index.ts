export const b = (str: string): string => `h-${str}`

export const be = (...args: string[]): string => `h-${args[0]}-${args[1]}`

export const be2 = (...args: string[]): string => `h-${args[0]}--${args[1]}`

export const bem = (...args: string[]): string => `h-${args[0]}-${args[1]}__${args[2]}`

export const bem2 = (...args: string[]): string => `h-${args[0]}-${args[1]}--${args[2]}`