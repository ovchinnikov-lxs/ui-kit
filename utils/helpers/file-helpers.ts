export function isValidUrl(string: string): boolean {
    try {
        return Boolean(new URL(string));
    } catch (_) {
        return false;
    }
}
