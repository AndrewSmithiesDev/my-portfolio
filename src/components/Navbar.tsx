type NavbarProps = {
  lang: string;
};

export default function Navbar({ lang }: NavbarProps) {
  const otherLang = lang === "fr" ? "en" : "fr";

  return (
    <nav className="navbar">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <a
          className="nav-link text-xl font-semibold opacity-90 hover:opacity-100 transition"
          href={`/${lang}`}
        >
          Portfolio
        </a>

        <div className="flex items-center gap-6">
          <a className="nav-link opacity-80 hover:opacity-100 transition" href={`/${lang}/about`}>
            About
          </a>
          <a className="nav-link opacity-80 hover:opacity-100 transition" href={`/${lang}/projects`}>
            Projects
          </a>
          <a className="nav-link opacity-80 hover:opacity-100 transition" href={`/${lang}/contact`}>
            Contact
          </a>

          <a
            className="nav-link opacity-60 hover:opacity-100 transition text-sm ml-2"
            href={`/${otherLang}`}
          >
            {otherLang.toUpperCase()}
          </a>
        </div>
      </div>
    </nav>
  );
}
