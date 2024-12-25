  import { Card } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  
  
  function Navbar() {
    return (
      <Card className="bg-sidebar py-3 px-4 flex items-center justify-between">  
        <div className="flex items-center">
          <Button variant="secondary" className="hidden md:block px-2">
            Login
          </Button>
          <Button className="hidden md:block ml-2 mr-2">Get Started</Button>
        </div>
      </Card>
    );
  };
  
  export default Navbar;