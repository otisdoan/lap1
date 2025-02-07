import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
function Accounts() {
  return (
    <>
      <div className="flex justify-between mt-[60px] mb-[20px]">
        <button className="flex items-center justify-center border-[#ddd] border-[1px] p-[5px] rounded-[10px] px-[20px]">
          <FaGoogle />
          <p className="ml-[5px]">Sign in with Google</p>
        </button>
        <button className="flex items-center justify-center border-[#ddd] border-[1px] p-[5px] rounded-[10px] px-[20px]">
          <FaApple />
          <p className="ml-[5px]">Sign in with Apple</p>
        </button>
      </div>
      <div className="text-center">
        <p>Have an account? <a href="#" className="text-blue-500 font-medium">Sign in</a></p>
      </div>
    </>
  )
}
export default Accounts;