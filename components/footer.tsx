export const Footer = () => {
  const links = [
    { name: 'github', url: 'https://github.com/bryanpth' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/bryanpth' },
    { name: 'email', url: 'mailto:bryanpth@icloud.com' },
  ];

  return (
    <footer className="flex w-full origin-bottom justify-center space-y-0.5 text-center animate-in zoom-in">
      <div className="flex justify-center">
        {links.map((link, index) => (
          <span key={link.name} className="flex items-center">
            <a
              className="text-zinc-500 underline-offset-4 outline-none transition-colors duration-200 hover:text-neutral-200 hover:underline focus-visible:text-neutral-200 focus-visible:underline"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
            {index < links.length - 1 && (
              <span className="mx-2 text-zinc-500">–</span>
            )}
          </span>
        ))}
      </div>
    </footer>
  );
};
