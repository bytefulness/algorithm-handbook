export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mt-32 md:mt-80 mb-20 text-center">
      {children}
    </h1>
  );
}
