const Welcome = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-93.75 h-screen bg-[#F7F8F9] border border-gray-200 relative">
        <div className="absolute bottom-8 left-5 right-5">
          <h1 className="text-[28px] font-bold text-[#1D2226] leading-tight">
            Welcome to PopX
          </h1>

          <p className="mt-3 text-[18px] text-gray-500 leading-7">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>

          <button className="w-full h-12 mt-6 bg-[#6C25FF] text-white font-semibold rounded-md hover:bg-[#5d1df0] transition">
            Create Account
          </button>

          <button className="w-full h-12 mt-3 bg-[#CEBAFB] text-[#1D2226] font-semibold rounded-md hover:bg-[#c4aef7] transition">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
