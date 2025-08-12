/// <reference types="vite/client" />
interface ImportMetaEnv {
  PUBLIC_COOKIE_SECURE: string;
  // Añade más variables aquí si las necesitas
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
