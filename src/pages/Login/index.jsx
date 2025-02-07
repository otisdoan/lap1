import Accounts from "../../components/Signup/Accounts";
import Form from "../../components/Signup/Form";
import "./Login.scss";
import loginImage from '../../assets/images/login.jpg';
function Login() {
  return (
    <>
      <div className="flex items-center justify-center h-[100%]">
        <div className="w-[60%] px-[250px] py-[6rem]">
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
        <div className="w-[40%] flex">
          <img src={loginImage} alt="picture" className="h-screen justify-self w-[100%]" />
        </div>
      </div>
    </>
  )
}
export default Login;