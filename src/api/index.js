export const API_URL = 'https://raw.githubusercontent.com/moser-jose/iconspeck/master/selection.json';

export function getIcons() {
    return {
        url: API_URL,
        options: {
            method: 'Get'
        },
    };
}