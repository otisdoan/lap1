import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
function Accounts() {
  return (
    <>
      <div className="flex justify-between mt-[60px] mb-[20px] w-[100%] lg:flex-row flex-col gap-x-4 gap-y-4">
        <button className="flex items-center justify-center border-[#ddd] border-[1px] p-[5px] rounded-[10px] px-[10px] w-[100%] lg:w-[50%] hover:bg-[#3a5b22] hover:text-white">
          <FaGoogle className="text-[1.4rem]"/>
          <p className="ml-[10px] text-[0.9rem]">Sign in with Google</p>
        </button>
        <button className="flex items-center justify-center border-[#ddd] border-[1px] p-[5px] rounded-[10px] px-[20px] w-[100%] lg:w-[50%] hover:bg-[#3a5b22] hover:text-white">
          <FaApple className="text-[1.6rem]"/>
          <p className="ml-[10px] text-[0.9rem]">Sign in with Apple</p>
        </button>
      </div>
      <div className="text-center w-[100%]">
        <p>Have an account? <a href="#" className="text-blue-500 font-medium">Sign in</a></p>
      </div>
    </>
  )
}
export default Accounts;