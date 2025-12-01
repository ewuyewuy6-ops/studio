
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2 font-bold text-lg">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-headline">MotionFolio</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <Link href="#home" className="flex items-center gap-2 font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                    <Code className="h-6 w-6 text-primary" />
                    <span className="font-headline">MotionFolio</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
