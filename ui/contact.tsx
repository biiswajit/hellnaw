import type { ComponentProps } from "react";
import tw from "@/utils/tw";
import ArrowUpRight from "./icons/arrow-up-right";

type SocialHandleProps = {
    url: string;
    seperateTab?: boolean;
} & ComponentProps<"a">;

function Contact() {
    return (
        <div className="px-mobile md:px-desktop flex flex-col gap-5 lg:gap-0 m-auto lg:m-0 text-center">
            <p className="lg:hidden uppercase font-bold text-3xl tracking-tighter">
                send a message <br /> on instagram or email
            </p>
            <p className="hidden lg:block uppercase font-bold lg:text-4xl xl:text-5xl 2xl:text-6xl border-y-2 py-2">
                send a message on instagram or email
            </p>
            <p className="lg:hidden uppercase text-xl tracking-tighter">
                and from there we can discuss <br /> about your business and <br /> requirements
            </p>
            <div className="hidden lg:flex justify-around lg:text-xl xl:text-2xl 2xl:text-3xl border-b-2 py-2">
                <span className="uppercase">
                    and from there we can discuss about <br /> your business and requirements
                </span>
                <div>
                    <SocialHandle url="mailto:hellnawbiz@gmail.com">hellnawbiz@gmail.com</SocialHandle>
                    <SocialHandle url="https://www.instagram.com/prod.hellnaw/" seperateTab={true}>
                        @prod.hellnaw
                    </SocialHandle>
                </div>
            </div>
            <div className="lg:hidden m-auto mt-14">
                <SocialHandle url="mailto:hellnawbiz@gmail.com" className="text-center">
                    hellnawbiz@gmail.com
                </SocialHandle>
                <SocialHandle url="https://www.instagram.com/prod.hellnaw/" seperateTab={true} className="text-center">
                    @prod.hellnaw
                </SocialHandle>
            </div>
        </div>
    );
}

function SocialHandle({ children, className, url, seperateTab }: SocialHandleProps) {
    return (
        <a
            href={url}
            target={seperateTab ? "_blank" : "_self"}
            className={tw(className, "italic tracking-tighter text-xl flex gap-2 items-center hover:cursor-pointer")}
        >
            {children}
            <ArrowUpRight className="xl:size-7 2xl:size-10" />
        </a>
    );
}

export default Contact;
