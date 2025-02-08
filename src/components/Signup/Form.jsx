function Form() {
  const inputElement = [
    {
      content: 'Name',
      id: 'name',
      type: 'text',
      placeholder: 'Enter your name'
    },
    {
      content: 'Email address',
      id: 'email',
      type: 'email',
      placeholder: 'Enter your email'
    },
    {
      content: 'Password',
      id: 'password',
      type: 'password',
      placeholder: 'Enter your password'
    },
  ];
  return (
    <>
      <form>
        {inputElement.map((element, index) => (
          <div className="" key={index}>
            <label htmlFor={element.id} className="block text-sm/6 font-medium text-gray-900">
              {element.content}
            </label>
            <div className="mt-2 w-[100%] mb-[20px]">
              <div className="flex items-center rounded-[10px] bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  id={element.id}
                  name={element.id}
                  type={element.type}
                  placeholder={element.placeholder}
                  className="block  w-[100%] py-[6px] pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="mb-[20px]">
          <input type="checkbox" />
          <label htmlFor="agree" className="font-medium text-gray-900 ml-[5px]">
            I agree to the <u>terms & policy</u>
          </label>
        </div>
        <div className="mb-[30px] w-[100%]">
          <button
            type="submit"
            className="flex w-full justify-center bg-[#3a5b22] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
            hover:bg-white hover:text-[#3a5b22] rounded-[10px]"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  )
}
export default Form;