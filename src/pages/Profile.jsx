import { Camera } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9]">
      <div className="w-[375px] h-screen bg-[#F7F8F9] border border-gray-200">
        
        {/* Header */}
        <div className="bg-white px-4 py-5 shadow-sm">
          <h1 className="text-xl font-semibold text-[#1D2226]">
            Account Settings
          </h1>
        </div>

        {/* Profile Section */}
        <div className="px-5 py-6">
          <div className="flex items-start gap-4">
            
            {/* Profile Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
              />

              <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#6C25FF] flex items-center justify-center text-white">
                <Camera size={14} />
              </div>
            </div>

            {/* User Info */}
            <div>
              <h2 className="font-semibold text-[#1D2226] text-lg">
                Marry Doe
              </h2>
              <p className="text-gray-600 text-sm">
                Marry@Gmail.Com
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 text-[15px] leading-7 text-[#3A3A3A]">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* Dashed Divider */}
        <div className="border-b border-dashed border-gray-300"></div>

        {/* Empty Space */}
        <div className="flex-1"></div>

        {/* Bottom Divider */}
        <div className="absolute bottom-8 left-0 right-0 border-b border-dashed border-gray-300"></div>
      </div>
    </div>
  );
};

export default Profile;