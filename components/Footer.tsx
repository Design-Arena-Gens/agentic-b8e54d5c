export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <p>
          Built with <span className="text-accent">Next.js</span>
        </p>
      </div>
    </footer>
  );
}
