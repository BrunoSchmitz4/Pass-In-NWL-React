import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<'a'> {
    children: string,
    isActived?: boolean
}

export function NavLink(props: NavLinkProps) {
    const isActived = "font-medium text-sm text-zinc-300";
    const isntActived = "font-medium text-sm";
    return (
    <a {...props} href={props.href} className={(props.isActived ? isActived : isntActived)}>{props.children}</a>   
    )
}