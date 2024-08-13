import { App } from 'vue'

declare module 'vue' {
  export interface GlobalComponents {
    UButton: typeof import('ucc-ui')['UButton'];
    ULayout: typeof import('ucc-ui')['ULayout'];
    URegion: typeof import('ucc-ui')['URegion'];
	}
}

export {}
