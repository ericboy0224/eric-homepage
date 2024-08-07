"use client"

import Link from 'next/link';
import * as React from 'react';

import { ModeToggle } from '@/components/mode-toggle';
import { oswald } from '@/components/ui/fonts';
import {
    NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

export function Header() {
    return (
        <div className={cn("flex justify-between w-auto p-10")}>
            <Link href="/"  passHref>
                <h2 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight antialiased", oswald.className)}>Eric Lin's Homepage</h2>
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>

                    </NavigationMenuItem>
                    {/* TODO combine posts and blog with NavigationContent */}
                    <NavigationMenuItem>
                        <Link href="/blog" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Blog
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/posts" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Posts
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    {/* TODO add subscriber system */}
                    {/* <NavigationMenuItem>
                        <Link href="/subscribe" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Subscribe
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem> */}
                </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
        </div >
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
