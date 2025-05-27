import { MEDIA_URL } from "../config";

export function getImageUrl(imagePath) {
    if (!imagePath) {
        return null;
    }
    const url = new URL(imagePath, MEDIA_URL);
    return url.href;
}