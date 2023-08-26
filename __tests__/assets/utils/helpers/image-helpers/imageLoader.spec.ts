import { imageLoader } from '../../../../../src/assets/utils/helpers/image-helpers';

describe('ImageLoaderClass Tests', () => {
    it('should load and retrieve an image', async () => {
        const src = '../../../../../test/static/favicon.svg';
        // TODO: REFACTOR THIS TEST
        expect(imageLoader.loadImage(src)).toBeInstanceOf(Promise);
    });

    it('should return false for empty source', () => {
        expect(imageLoader.getImage('')).toBe(false);
    });
});
