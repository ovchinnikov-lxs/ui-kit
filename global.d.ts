export {};

export interface IOLazyObserver {
    object: IntersectionObserver,
    actions: {
        [key: string | number]: (e: Element) => void
    }
}
declare global {
    interface Window {
        OLazyObserver: IOLazyObserver | null;
    }
}
