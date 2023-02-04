export {};

declare global {
    interface Window {
        OLazyObserver: {
            object: IntersectionObserver,
            actions: {
                [key: string | number]: (e: Element) => void
            }
        } | null;
    }
}
