import type { ComponentProps } from "react";
import tw from "@/utils/tw";

function Highlights() {
    return (
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-2 xl:gap-16 2xl:gap-28">
            <HighlightBox className="col-span-2 lg:col-span-1">
                worked for
                <br />
                10+ creators
            </HighlightBox>
            <HighlightBox>
                500+
                <br />
                videos
                <br />
                edited
            </HighlightBox>
            <HighlightBox>
                more reliable
                <br />
                than ai tools
            </HighlightBox>
            <HighlightBox className="col-span-2 lg:col-span-1">
                worked for
                <br />
                top creators
                <br />
                (2m+ followers)
            </HighlightBox>
        </div>
    );
}

function HighlightBox({ children, className }: ComponentProps<"div">) {
    return (
        <div
            className={tw(
                className,
                "grid place-content-center border-2 border-white rounded-box uppercase text-center tracking-tighter",
                "text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl",
                "py-10 lg:py-12 xl:py-14 2xl:py-18",
            )}
        >
            {children}
        </div>
    );
}

export default Highlights;
