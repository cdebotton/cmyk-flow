/* @flow */

declare module 'polished' {
  declare class Polished {
    normalize(strict?: boolean): string,
    rem(value: string): string,
    placeholder(config: { [key: string]: string | number }): string,
    modularScale(base: number): string,
  }

  declare module.exports: Polished;
}
