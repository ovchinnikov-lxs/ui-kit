export const MEDIA_QUERIES_KEYS = {
    MOBILE: 'mobile',
    TABLET: 'tablet',
    LAPTOP: 'laptop',
    DESKTOP_SM: 'desktopSm',
    DESKTOP: 'desktop',
    DESKTOP_LG: 'desktopLg',
    RETINA_DESKTOP: 'retinaDesktop',
    RETINA_LAPTOP: 'retinaLaptop',
    RETINA_TABLET: 'retinaTablet',
    RETINA: 'retina',
};

export const MEDIA_QUERIES = {
    [MEDIA_QUERIES_KEYS.MOBILE]: '(min-width: 576px)',
    [MEDIA_QUERIES_KEYS.TABLET]: '(min-width: 768px)',
    [MEDIA_QUERIES_KEYS.LAPTOP]: '(min-width: 992px)',
    [MEDIA_QUERIES_KEYS.DESKTOP_SM]: '(min-width: 1366px)',
    [MEDIA_QUERIES_KEYS.DESKTOP]: '(min-width: 1440px)',
    [MEDIA_QUERIES_KEYS.DESKTOP_LG]: '(min-width: 1920px)',
    [MEDIA_QUERIES_KEYS.RETINA_DESKTOP]: '(min-width: 1440px) and (min-resolution: 1.5dppx), (min-width: 1440px) and (min-resolution: 144dpi)',
    [MEDIA_QUERIES_KEYS.RETINA_LAPTOP]: '(min-width: 992px) and (min-resolution: 1.5dppx), (min-width: 992px) and (min-resolution: 144dpi)',
    [MEDIA_QUERIES_KEYS.RETINA_TABLET]:
        '(min-width: 768px) and (min-height: 415px) and (min-resolution: 1.5dppx), (min-width: 768px) and (min-height: 415px) and (min-resolution: 144dpi)',
    [MEDIA_QUERIES_KEYS.RETINA]: '(min-resolution: 1.5dppx), (min-resolution: 144dpi)',
} as const;
