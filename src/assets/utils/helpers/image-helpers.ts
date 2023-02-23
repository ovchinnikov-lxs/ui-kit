interface IImageData {
    image: HTMLImageElement;
    width: number;
    height: number;
}

class ImageLoaderClass {
    private readonly images: {
        [key: string]: IImageData
    };

    constructor() {
        this.images = {};
    }

    getImage(src: string): object | boolean {
        if (!src.length) {
            return false;
        }

        return this.images[src] || false;
    }

    async loadImage(src: string) {
        return new Promise((resolve, reject) => {
            const image = new Image();

            image.onload = () => {
                if (typeof window !== 'undefined') {
                    this.images[src] = {
                        image,
                        width: image.naturalWidth,
                        height: image.naturalHeight,
                    };
                }

                resolve({
                    image: image,
                    width: image.naturalWidth,
                    height: image.naturalHeight,
                });
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
