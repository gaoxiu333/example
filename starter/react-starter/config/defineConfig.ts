import { AppConfig } from "./type";

type KeysWithFallbackValue = "mocksEnabled";
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

type RequiredConfig = Optional<AppConfig, KeysWithFallbackValue>;

const defaultConfig: Pick<AppConfig, KeysWithFallbackValue> = {
  mocksEnabled: false,
};

export function defineConfig(config: RequiredConfig) {
  return {
    ...defaultConfig,
    ...config,
  };
}
