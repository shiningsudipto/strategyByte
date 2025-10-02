const Call = ({ className }: { className?: string }) => {
  return (
    <a href="tel:0410745998">
      <button
        className={`bg-white rounded-full text-neutral-800 font-bold text-lg h-14 w-[82px] flex justify-center items-center ${className}`}
      >
        Call
      </button>
    </a>
  );
};

export default Call;
