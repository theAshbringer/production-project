import { ResolveOptions } from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true, //абсолютные пути в приоритете
    modules: [options.paths.src, 'node_modules'],
    // Если alias пустой, то абсолютные пути будут называться сразу с вложенных папок
    alias: {},
    // Указывает на главный файл в модуле (т.е. index.tsx)
    mainFiles: ['index'],
  }
}