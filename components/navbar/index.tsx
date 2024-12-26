import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

function Navbar() {
    return (
        <Card className="bg-sidebar flex items-center float-right">
            <div className="flex items-center py-5 px-20">
                <Button
                    variant="settingbutton"
                    className="hidden md:block ml-2 mr-2 w-14 h-10 px-3.5 bg-sidebar-foreground opacity-80 text-custombutton rounded-xl flex hover:opacity-100"
                >
                    <Settings />
                </Button>

                <Button className="hidden md:block ml-2 mr-2 h-10 px-3 rounded-xl text-base">Connect Wallet</Button>
            </div>
        </Card>
    );
};

export default Navbar;