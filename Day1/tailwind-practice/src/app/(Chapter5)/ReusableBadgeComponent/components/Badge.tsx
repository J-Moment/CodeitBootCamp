import clsx from "clsx";

type BadgeProps = {
    children: React.ReactNode;
    variant?: "primary" | "success" | "warning" | "danger" | "info";
    size?: "xs" | "sm" | "md";
    outlined?: boolean;
    rounded?: boolean;
    withDot?: boolean;
    className?: string;
};

const Badge = ({
    children,
    variant = "primary",
    size = "sm",
    outlined = false,
    rounded = false,
    withDot = false,
    className,
}: BadgeProps) => {
    const badgeClasses = clsx(
        "inline-flex items-center font-medium",

        // 사이즈별 스타일
        {
            "text-xs px-1.5 py-0.5": size === "xs",
            "text-sm px-2.5 py-0.5": size === "sm",
            "text-base px-3 py-1": size === "md"
        },

        // variant별 색상
        {
            //기본 스타일
            "bg-blue-600 text-white": variant === "primary" && !outlined,
            "bg-green-100 text-green-800": variant === "success" && !outlined,
            "bg-yellow-100 text-yellow-800": variant === "warning" && !outlined,
            "bg-red-100 text-red-800": variant === "danger" && !outlined,
            "bg-blue-100 text-blue-800": variant === "info" && !outlined,

            //outpline이 존재할 때
            "bg-transparent border": outlined,
            "border-blue-500 text-blue-500": variant === "primary" && outlined,
            "border-green-500 text-green-500": variant === "success" && outlined,
            "border-yellow-500 text-yellow-500": variant === "warning" && outlined,
            "border-red-500 text-red-500": variant === "danger" && outlined,
            "border-blue-400 text-blue-400": variant === "info" && outlined,
        },

        //rounded 옵션
        {
            rounded: !rounded,
            "rounded-full": rounded,
        },
        className,
    );
    const dotColorClasses = {
        "bg-blue-500": variant === "primary",
        "bg-green-500": variant === "success",
        "bg-yellow-500": variant === "warning",
        "bg-red-500": variant === "danger",
        "bg-blue-400": variant === "info",
    };


    return (
        <span className={badgeClasses}>
            {withDot && (
                <span
                    className={clsx("mr-1.5 h-2 w-2 rounded-full", dotColorClasses)}
                ></span>
            )}
            {children}
        </span>
    );
}

export default Badge;