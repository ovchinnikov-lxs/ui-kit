export function useUiCommon<T>(props: T) {
    const attrs = useAttrs();

    const componentAttrs = computed(() => ({
        ...attrs,
        ...props,
    }));

    return {
        componentAttrs,
    };
}
