import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ethereal Emporium. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
