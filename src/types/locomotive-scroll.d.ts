declare module "locomotive-scroll" {
  interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    lerp?: number;
    multiplier?: number;
    class?: string;
    smoothMobile?: boolean;
    smartphone?: { smooth?: boolean };
    tablet?: { smooth?: boolean };
    direction?: "vertical" | "horizontal";
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    update(): void;
    destroy(): void;
    scrollTo(target: HTMLElement | string | number, options?: { offset?: number; duration?: number; easing?: [number, number, number, number] }): void;
    on(event: string, callback: (args?: any) => void): void;
    off(event: string, callback: (args?: any) => void): void;
  }
}
