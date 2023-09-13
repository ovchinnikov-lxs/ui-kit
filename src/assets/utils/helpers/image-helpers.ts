interface IImageData {
    image: HTMLImageElement;
    width: number;
    height: number;
}

class ImageLoaderClass {
    private readonly images: Map<string, IImageData>;

    constructor() {
        this.images = new Map();
    }

    getImage(src: string): IImageData | false {
        if (!src.length) {
            return false;
        }

        return this.images.get(src) || false;
    }

    async loadImage(src: string) {
        return new Promise((resolve, reject) => {
            const image = new Image();

            image.onload = () => {
                const value = {
                    image,
                    width: image.naturalWidth,
                    height: image.naturalHeight,
                };

                if (typeof window !== 'undefined') {
                    this.images.set(src, value);
                }

                resolve(value);
            };

            image.onerror = e => {
                reject(e);
            };

            image.src = src;
        });
    }
}

const imageLoader = new ImageLoaderClass();

export { imageLoader };
