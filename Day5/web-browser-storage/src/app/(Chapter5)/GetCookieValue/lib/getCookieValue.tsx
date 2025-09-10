export function getCookieValue(name: string): string | undefined {
    const encodedName = encodeURIComponent(name);
    const cookies = document.cookie.split("; ");

    const cookie = cookies.find((cookie) => cookie.startsWith(encodedName + "="));
    if (cookie) {
        return decodeURIComponent(cookie.split("=")[1]);
    }
    return undefined;
}