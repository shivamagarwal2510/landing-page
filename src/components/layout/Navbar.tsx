import { useState } from "react";
import { Rocket, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-10 backdrop-blur-md bg-background/80 border-b border-border/80"
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 text-primary hover:opacity-80 transition-opacity">
          <Rocket size={28} />
          <span className="text-xl font-bold">LaunchPad</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Button key={link.label} variant="ghost" asChild>
              <a href={link.href} className="text-foreground/80 hover:text-primary transition-colors">
                {link.label}
              </a>
            </Button>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] p-6">
              <div className="flex justify-between items-center mb-8">
                 <a href="#home" className="flex items-center space-x-2 text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                    <Rocket size={24} />
                    <span className="text-lg font-bold">LaunchPad</span>
                  </a>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                   </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <Button variant="ghost" asChild className="justify-start text-lg">
                       <a href={link.href}>{link.label}</a>
                    </Button>
                  </SheetClose>
                ))}
                 <div className="pt-4 border-t border-border">
                    <ModeToggle />
                 </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
