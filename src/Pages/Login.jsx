function Login() {
  return (
    <div className='bg-slate-900 w-full h-screen flex items-center justify-center'>
      <div className='flex flex-col py-14 rounded-xl bg-primary min-w-[550px] min-h-[450px] gap-y-12'>
        <div className='flex flex-col items-center gap-y-8'>
          <img src='/logo.svg' />
          <h1 className='text-white text-2xl font-semibold'>
            Login to your account
          </h1>
        </div>
        <div className='flex flex-col px-16 gap-y-3'>
          <input
            type='text'
            className='h-8 bg-primary p-5 border border-[#34415E] text-white rounded-md'
            placeholder='Username'
          />
          <div className='relative'>
            <input
              type='text'
              className='h-8 w-full bg-primary p-5 border border-[#34415E] text-white rounded-md'
              placeholder='Password'
            />
            <div className='absolute top-3 right-5 bottom-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='lucide lucide-eye'
              >
                <path d='M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0' />
                <circle cx='12' cy='12' r='3' />
              </svg>
              {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='lucide lucide-eye-off'
              >
                <path d='M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49' />
                <path d='M14.084 14.158a3 3 0 0 1-4.242-4.242' />
                <path d='M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143' />
                <path d='m2 2 20 20' />
              </svg> */}
            </div>
          </div>
          <div className='flex items-center justify-between text-white'>
            <div className='flex gap-x-3 my-1'>
              <input
                type='checkbox'
                name='remember_me'
                className='bg-gradient-to-r from-indigo-400 to-sky-300'
              />
              <label htmlFor='remember_me' className=''>
                Remember Me
              </label>
            </div>
            <p>Forgot your password ?</p>
          </div>
          <button className='my-3 bg-[#6A75EA] p-2.5 text-white rounded font-semibold lg:text-xl text-base hover:bg-indigo-500'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
