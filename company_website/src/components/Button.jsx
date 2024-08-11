const NeuButton = ({ text }) => {
    return (
      <div className="flex items-center justify-center">
        <button className="px-6 py-2 font-medium bg-white text-[#004AAD] w-fit transition-all shadow-[5px_5px_100px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          {text}
        </button>
      </div>
    );
  };
  
  export default NeuButton;