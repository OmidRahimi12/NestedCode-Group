export default function Button({ children, style }) {
  return (
    <button
      className={`bg-[#00a19e] text-white py-2 px-2 rounded
      transition-all duration-300
      hover:bg-[#008f8c]
      hover:scale-105 cursor-pointer
      ${style}`}
    >
      {children}
    </button>
  );
}