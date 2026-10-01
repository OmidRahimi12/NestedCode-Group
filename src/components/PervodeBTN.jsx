export default function PervodeBTN({ monthly, setMonthly }) {

  return (
    <div className="flex items-center gap-2 rounded-full bg-[#e8f5f5] px-3 py-1 text-xs">

      <span>Monthly</span>

      <button
        onClick={() => setMonthly(!monthly)}
        className="relative h-5 w-10 rounded-full bg-[#bde5e4]"
      >

        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all duration-300 ${
            monthly ? "left-0.5" : "left-5"
          }`}
        ></span>

      </button>

      <span>Yearly</span>

    </div>
  );
}