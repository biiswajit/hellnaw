import tw from "@/utils/tw";

export default function ArrowUpRight({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={tw(className, "lucide lucide-arrow-up-right-icon lucide-arrow-up-right")}
        >
            <title>arrow up right</title>
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
        </svg>
    );
}
