import { ThemeProvider } from "./providers/ThemeProvider";
import "../../globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
