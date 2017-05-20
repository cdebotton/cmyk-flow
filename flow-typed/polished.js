/* @flow */

declare module 'polished' {
  declare class Polished {
    normalize(strict?: boolean): string,
    rem(value: string): string,
    placeholder(config: { [key: string]: string }): string,
  }

  declare module.exports: Polished;
}
