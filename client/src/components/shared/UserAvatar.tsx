import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserAvatarPropsType } from "@/lib/types";
import { cn } from "@/lib/utils";

export function UserAvatar({ className }: UserAvatarPropsType) {
  return (
    <Avatar className={cn("size-10", className)}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>Avatar</AvatarFallback>
    </Avatar>
  );
}
