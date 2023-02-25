const formatBytes = (a: number, b = 2) => {
    if (0 === a) {
        return '0 Байт';
    }
    const c = 0 > b ? 0 : b;
    const d = Math.floor(Math.log(a) / Math.log(1024));

    return parseFloat((a / Math.pow(1024, d)).toFixed(c)) + ' ' + ['Байт', 'КБ', 'МБ', 'ГБ', 'ТБ', 'ПБ', 'ЭБ', 'ЗБ', 'ЙБ'][d];
};


export {
    formatBytes,
};
