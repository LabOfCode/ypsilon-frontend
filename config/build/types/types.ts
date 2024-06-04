export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  public: string;
  src: string;
  publicpath: string;
}

export type BuildMode = 'production' | 'development';

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
}
