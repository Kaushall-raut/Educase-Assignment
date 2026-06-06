import { useState } from "react";

const SignUp = () => {
  const [agency, setAgency] = useState("yes");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9]">
      <div className="w-[375px] h-screen bg-[#F7F8F9] border border-gray-200 px-5 py-10 relative">
        <h1 className="text-[32px] font-bold text-[#1D2226] leading-tight mb-8">
          Create your <br />
          PopX account
        </h1>

        <form className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-xs font-medium text-[#6C25FF]">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm focus:outline-none focus:border-[#6C25FF]"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-xs font-medium text-[#6C25FF]">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Marry Doe"
              className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm focus:outline-none focus:border-[#6C25FF]"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-xs font-medium text-[#6C25FF]">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Marry Doe"
              className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm focus:outline-none focus:border-[#6C25FF]"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-xs font-medium text-[#6C25FF]">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Marry Doe"
              className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm focus:outline-none focus:border-[#6C25FF]"
            />
          </div>

          {/* Company */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-xs font-medium text-[#6C25FF]">
              Company name
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm focus:outline-none focus:border-[#6C25FF]"
            />
          </div>

          {/* Agency */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-3">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>

            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  checked={agency === "yes"}
                  onChange={() => setAgency("yes")}
                  className="w-5 h-5 accent-[#6C25FF]"
                />
                <span className="text-sm text-gray-700">Yes</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  checked={agency === "no"}
                  onChange={() => setAgency("no")}
                  className="w-5 h-5 accent-[#6C25FF]"
                />
                <span className="text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>
        </form>

        {/* Bottom Button */}
        <button className="absolute bottom-8 left-5 right-5 h-12 bg-[#6C25FF] text-white font-semibold rounded-md hover:bg-[#5d1df0] transition">
          <a href="/account">Create Account</a>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
