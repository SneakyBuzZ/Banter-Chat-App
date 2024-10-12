import { lily_script_one } from "@/lib/fonts";
import { LogoPropsType } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = ({
  showText = true,
  className,
  logoClass,
  textClassName,
}: LogoPropsType) => {
  return (
    <div className={cn("flex items-center gap-1 justify-start", className)}>
      <Image
        src="/assets/icons/logo.svg"
        height={30}
        width={30}
        alt="Extroworks"
        className={cn("w-6", logoClass)}
        priority
      />
      {showText && (
        <h4
          className={cn(
            "text-base md:text-xl lg:text-2xl text-extroworks-neutral--500",
            textClassName,
            lily_script_one.className
          )}
        >
          Website
        </h4>
      )}
    </div>
  );
};

export default Logo;
