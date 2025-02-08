import Accounts from "../../components/Signup/Accounts";
import Form from "../../components/Signup/Form";
import loginImage from '../../assets/images/login.jpg';
function Login() {
  return (
    <div className="flex h-[100%] max-w-[100%] container">
      <div className="w-[60%] px-[250px] py-[20px] border-solid flex flex-col justify-center h-[100vh]">
        <h1 className="text-[1.3rem] font-bold mb-[40px]">Get Started Now</h1>
        <div className="w-[100%]">
          <Form />
        </div>
        <div className="flex items-center justify-center">
          <div className="border-t-[1px] border-blacks w-[100%]"></div>
          <span className="text-[0.7rem] font-bold">Or</span>
          <div className="border-t-[1px] border-blacks w-[100%]"></div>
        </div>
        <Accounts />
      </div>
      <div className="w-[40%] flex flex-col">
        <img src={loginImage} alt="picture" className="h-[100vh] w-[100%] justify-end" />
      </div>
    </div>
  )
}
export default Login;