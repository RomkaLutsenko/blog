export type mode = 'development' | 'production'

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: mode;
    port: number;
}

export interface BuildOptions {
    mode: mode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}