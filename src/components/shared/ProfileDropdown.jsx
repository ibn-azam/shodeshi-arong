import { Gear, Persons } from "@gravity-ui/icons";
import Link from "next/link";
import { DropdownMenu } from "../ui/dropdown-menu";
import { Avatar } from "../ui/avatar";
import { LabelableProvider } from "@base-ui/react/internals/labelable-provider";



export function ProfileDropdown({}) {


  return (
    <DropdownMenu>
      <DropdownMenu.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image/>
          <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
        </Avatar>
      </DropdownMenu.Trigger>

      <DropdownMenu.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image/>
              <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
            </Avatar>

            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">
                {"User"}
              </p>
              <p className="text-xs leading-none text-muted">
                {""}
              </p>
            </div>
          </div>
        </div>

        <DropdownMenu.Menu>
          <DropdownMenu.Item id="dashboard" textValue="Dashboard">
            <Link className="w-full" href={routes.dashboard}>
              <LabelableProvider>Dashboard</LabelableProvider>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item id="profile" textValue="Profile">
            <Link
              className="flex w-full items-center justify-between gap-2"
              href={routes.profile}
            >
              <LabelableProvider>Profile</LabelableProvider>
              <Persons className="size-3.5 text-muted" />
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Menu>
      </DropdownMenu.Popover>
    </DropdownMenu>
  );
}