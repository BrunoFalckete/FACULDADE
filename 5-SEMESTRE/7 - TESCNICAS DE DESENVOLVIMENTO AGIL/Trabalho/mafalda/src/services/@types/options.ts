export interface Options {
  headers?: Record<string, string>;
  cache?: 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached';
  mode?: 'cors' | 'navigate' | 'no-cors' | 'same-origin';
  authorization?: string;
  queryParams?: Record<string, string | number | boolean> 
}