
"use client"
import * as React from "react";

export function Footer() {
  // This will cause a hydration error because server and client render different values.
  // We can fix this by using a client component and useEffect.
  // However, for a simple year, it's often acceptable to just let it be.
  // For this project, we will build it correctly as a client component.
  const [year, setYear] = React.useState(new Date().getFullYear());
  
  React.useEffect(() => {
    setYear(new Date().getFullYear());
  },[]);


  return (
    <footer className="bg-secondary/30">
      <div className="container mx-auto py-6 px-4 md:px-6 text-center text-sm text-muted-foreground">
        <p>&copy; {year} MotionFolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
