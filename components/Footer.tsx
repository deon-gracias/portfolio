export default function Footer() {
  return (
    <footer className="p-10 footer text-base-content">
      <div className="flex flex-col items-center w-full">
        <span className="mr-2">Deon Gracias</span> &copy;{" "}
        {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
}
