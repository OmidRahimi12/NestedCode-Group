export default function Button({ children, style = "" }) {
  return (
    <button
      className={`rounded-lg bg-linear-to-r from-[#00a19e] to-[#008f8c]
      px-5 py-2.5 font-medium text-white shadow-md shadow-[#00a19e]/20
      transition-all duration-300 ease-out
      hover:-translate-y-0.5 hover:from-[#008f8c] hover:to-[#007f7c]
      hover:shadow-lg hover:shadow-[#00a19e]/30
      active:translate-y-0 active:shadow-sm
      focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-[#00a19e]
      ${style}`}
    >
      {children}
    </button>
  );
}