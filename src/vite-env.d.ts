/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH_CODE_HASH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
