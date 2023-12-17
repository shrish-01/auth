import {
    NavigationMenu,
    NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    // NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"
import { useToken } from "../auth/useToken"

export const NavbarCustom = () => {

    const [ token ] = useToken();
    const isAuth = !!token;
    const location = useLocation();
    const activePath = location.pathname;

    return (
        <div className="my-1">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <Link to="/">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    JD Home
                                </NavigationMenuLink>
                            </Link>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                JDF Home
                            </NavigationMenuLink>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                JD India
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>About</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About JDF
                            </NavigationMenuLink>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About JD
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Assets</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Asset Dashboard Page
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Button asChild className={`hover:bg-gray-200 rounded-3xl ${activePath === '/sampleSheetPage' ? 'bg-gray-200' : ''}`}>
                            <Link to="/sampleSheetPage">Pop Up</Link>
                        </Button>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Button asChild className={`hover:bg-gray-200 rounded-3xl ${activePath === '/login' ? 'bg-gray-200' : ''}`}>
                            <Link to="/login">Login</Link>
                        </Button>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Button asChild className={`hover:bg-gray-200 rounded-3xl ${activePath === '/signup' ? 'bg-gray-200' : ''}`}>
                            <Link to="/signup">Sign Up</Link>
                        </Button>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
