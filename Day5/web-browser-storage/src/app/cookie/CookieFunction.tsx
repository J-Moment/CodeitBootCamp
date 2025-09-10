interface CookieOptions {
    path?: string;
    domain?: string;
    expires?: Date;
    maxAge?: number;
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
    [key: string]: string | number | boolean | Date | undefined;
}

//쿠키 생성 함수
export function setCookie(
    name: string,
    value: string,
    options: CookieOptions = {},
) {
    options = {
        path: '/',
        ...options,
    };

    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    for (const optionKey in options) {
        const optionValue = options[optionKey];
        if (optionValue === undefined || optionValue === null || optionValue === false) continue;

        let finalValue = optionValue;
        if (optionValue instanceof Date) {
            finalValue = optionValue.toUTCString();
        }

        cookieString += `; ${optionKey}`;

        if (finalValue !== true) {
            cookieString += `=${finalValue}`;
        }
    }

    document.cookie = cookieString;
}

// 쿠키 조회 함수
export function isCookieExists(name: string): boolean {
    const encodedName = encodeURIComponent(name);
    return document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith(encodedName + "="))
        ? true
        : false;
}

// 쿠키 삭제 함수
export function deleteCookie(name: string) {
    document.cookie = encodeURIComponent(name) + "=; Max-age=0";
}