// Icons
import Search from "../../icons/Search";
import Plus from "../../icons/Plus";

const ContactHeader = () => {
  return (
    <div className="bg-[#F6F6F6] rounded-2xl h-20 flex items-center px-5">
      <h1 className="text-3xl font-bold">Chat</h1>
      <div className="h-12 flex-1 ml-3 mr-2 relative">
        <input
          type="text"
          className=" h-full w-full text-sm rounded-2xl border border-gray-300 p-2 absolute top-0 left-0 placeholder:text-gray-500 text-gray-500 focus:outline-0 focus:border-gray-500"
          placeholder="Search"
        />
        <Search
          className="h-5 w-5 absolute top-1/2 right-[8px] -translate-y-1/2"
          color="rgb(209 213 219)"
        />
      </div>
      <button className="h-12 w-12 rounded-full bg-lightOrange flex items-center justify-center">
        <Plus color="white" className="h-7 w-7" />
      </button>
    </div>
  );
};

export default ContactHeader;
