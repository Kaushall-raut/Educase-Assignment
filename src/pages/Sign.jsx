const Sign = () => {
  return (
    <div className="min-h-screen bg-[#F7F8F9] flex justify-center items-center">
      <div className="w-[375px] h-[812px] border border-gray-200 bg-[#F7F8F9] px-5 pt-10">
        
        {/* Heading */}
        <h1 className="text-[32px] font-bold text-[#1D2226] leading-tight">
          Signin to your <br />
          PopX account
        </h1>

        <p className="mt-4 text-[18px] text-gray-500 leading-7">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5" >
          
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-xs font-medium text-[#6C25FF]">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter email address"
              className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm outline-none focus:border-[#6C25FF]"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-xs font-medium text-[#6C25FF]">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm outline-none focus:border-[#6C25FF]"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-md bg-[#CBCBCB] text-white font-semibold"
          >
           <a href="/account">Login</a> 
          </button>
        </form>

      </div>
    </div>
  );
};

export default Sign;