import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import AnimationPage from "./AnimationPage"
import { Navigate, useNavigate } from "react-router-dom"
import { useToken } from "../auth/useToken"
import { useUser } from "../auth/useUser"

export function SampleSheetPage() {

    const user = useUser();
    const { isVerified } = user;

    const [token] = useToken();
    const isAuthenticated = !!token;
    // const location = useLocation();
    // const activePath = location.pathname;
    const navigate = useNavigate();

    const handleLogout = () => {
        // localStorage.clear();
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (

        isAuthenticated ? (
            <div className="flex justify-center items-center rounded-md flex-col">
                {!isVerified && <div className="text-red-500 my-4">please verify your email!</div>}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="secondary">Open</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you are done.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name" value="Pedro Duarte" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input id="username" value="@peduarte" className="col-span-3" />
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
                <AnimationPage className="width-2" />

                <div className="flex justify-center items-center mt-5">
                    <button onClick={handleLogout} className="border bg-cyan-700 text-white text-sm p-2 rounded-3xl hover:bg-cyan-500 hover:text-cyan-800">Logout</button>
                </div>

            </div>
        ) : (
            <Navigate to="/login" />
        )
    )
}
