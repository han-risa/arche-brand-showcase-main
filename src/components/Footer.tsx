const Footer = () => (
  <footer className="border-t bg-card py-10 mt-20">
    <div className="container text-center">
      <p className="font-serif text-lg font-semibold text-foreground">Arche</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Connecting brands, business owners & influencers.
      </p>
      <p className="mt-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Arche. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
