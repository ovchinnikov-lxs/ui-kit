export {};

export interface IUiLazyObserver {
    object: IntersectionObserver,
    actions: {
        [key: string | number]: (e: Element) => void
    }
}
declare global {
    interface Window {
        UiLazyObserver: IUiLazyObserver | null;
    }
}
