import * as motion from "motion/react-client"

export default function Home() {
    return (
        <div className="flex h-screen items-center justify-center gap-2">
            <motion.div className="animate-show-up h-96 w-72 rounded-lg border shadow-md"
                initial={{ translateY: 20, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }} />
        </div>
    );
}