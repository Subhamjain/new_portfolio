declare module "gsap/ScrollSmoother" {
  const ScrollSmoother: any;
  export default ScrollSmoother;
}

declare module "gsap/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    constructor(target: string | string[] | Element | Element[], vars?: object);
    split(vars?: object): SplitText;
    revert(): void;
  }
}