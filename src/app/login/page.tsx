"use client";

import { useLoginMutation } from "@/redux/features/auth/AuthAPI";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft, Eye, EyeOff } from "lucide-react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { toast } from "react-toastify";
// import { useLoginMutation } from "@/redux/features/auth/AuthAPI";

interface IFormInput {
  email: string;
  password: string;
}

// export default function LoginPage() {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { register, handleSubmit } = useForm<IFormInput>();
//   const [login] = useLoginMutation()

//   const handleSubmitForm: SubmitHandler<IFormInput> = (data) => {
//     const { email, password } = data;
//     console.log(data);
//     try {
//       const response =  login({
//         email,
//         password,
//       }).unwrap();

//       if (response.success) {
//         localStorage.setItem("accessToken", response.data.accessToken);
//         // Cookies.set("accessToken", response.data.accessToken, {
//         //   expires: 1,
//         //   path: "/",
//         //   sameSite: "Strict",
//         //   secure: true,
//         // });
//         localStorage.setItem("refreshToken", response.data.refreshToken);
//         localStorage.setItem("user", JSON.stringify(response.data.user));

//         toast.success("Login Successful!", {
//           autoClose: 1500,
//         });

//         setTimeout(() => {
//           router.push("/");
//         }, 1500);
//       } else {
//         toast.error(response.message || "Invalid credentials!");
//       }
//     } catch (error: unknown) {
//       console.error("Login error:", error);
//       if (
//         error &&
//         typeof error === "object" &&
//         "data" in error &&
//         typeof error.data === "object" &&
//         error.data &&
//         "message" in error.data
//       ) {
//         toast.error(
//           (error.data as { message: string }).message ||
//             "Something went wrong. Try again!"
//         );
//       } else {
//         toast.error("Something went wrong. Try again!");
//       }
//     }
//   };

//   console.log(email, password);

//   return (
//     <div className='flex min-h-screen flex-col md:flex-row lg:-ml-64'>
//       {/* Left Section - Image and Logo */}
//       <div className='relative w-full h-screen flex flex-1 items-center justify-center bg-black/60'>
//         <Image
//           src='/login/bg.png'
//           alt='Background'
//           width={1900}
//           height={1900}
//           className='object-cover min-w-full min-h-full'
//           priority
//         />
//       </div>

//       {/* Right Section - Login Form */}
//       <div className='flex flex-1 items-center justify-center bg-white p-6 md:p-10'>
//         <div className='w-full max-w-md space-y-8'>
//           <div className='space-y-2'>
//             <div className='flex items-center justify-center gap-2'>
//               <button
//                 onClick={() => router.back()}
//                 className='text-gray-600 hover:text-gray-900'
//               >
//                 <ArrowLeft size={24} />
//               </button>
//               <h2 className='text-[32px] font-bold text-[#3D3D3A] text-center'>
//                 Sign In
//               </h2>
//             </div>
//             <p className='text-lg text-[#737163] max-w-[360px] mx-auto text-center'>
//               Please enter your email address to reset your password.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit(handleSubmitForm)} className='space-y-6'>
//             <div className='space-y-4'>
//               <div className='relative'>
//                 <input
//                   type='email'
//                   // value={email}
//                   // onChange={(e) => setEmail(e.target.value)}
//                   {...register("email", { required: true })}
//                   required
//                   placeholder='Enter Email'
//                   className='w-full rounded-full placeholder-[#737163] border border-gray-300 px-4 py-3 focus:border-blue-900 focus:outline-none'
//                 />
//               </div>
//               <div className='relative'>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   // value={password}
//                   // onChange={(e) => setPassword(e.target.value)}
//                   {...register("password", { required: true })}
//                   required
//                   placeholder='Enter Password'
//                   className='w-full rounded-full placeholder-[#737163] border border-gray-300 px-4 py-3 pr-12 focus:border-blue-900 focus:outline-none'
//                 />
//                 <button
//                   type='button'
//                   onClick={() => setShowPassword(!showPassword)}
//                   className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500'
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//             </div>

//             <div className='flex items-center justify-between cursor-pointer'>
//               <label className='flex items-center gap-2'>
//                 <input
//                   type='checkbox'
//                   className='h-4 w-4 rounded border-gray-300'
//                 />
//                 <span className='text-lg text-[#737163]'>Remember me</span>
//               </label>
//               <Link
//                 href='/forgot-password'
//                 className='text-lg font-medium text-[#1A1918] hover:underline'
//               >
//                 Forgot password?
//               </Link>
//             </div>

//             <button
//               type='submit'
//               className='w-full rounded-full text-lg font-medium bg-blue-900 px-6 py-3 text-[#FFFFFF] transition-colors hover:bg-blue-800'
//             >
//               Sign In
//             </button>

//             <p className='text-center text-base text-[#3D3D3A]'>
//               Don&apos;t have an account?{" "}
//               <Link
//                 href='/signup'
//                 className='text-lg font-medium text-[#01336F] hover:underline'
//               >
//                 Sign Up
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<IFormInput>();
  const [login] = useLoginMutation();

  const handleSubmitForm: SubmitHandler<IFormInput> = async (data) => {
    const { email, password } = data;
    console.log(data);
    try {
      const response = await login({
        email,
        password,
      }).unwrap();

      if (response.success) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        toast.success("Login Successful!", {
          autoClose: 1500,
        });

        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        toast.error(response.message || "Invalid credentials!");
      }
    } catch (error: unknown) {
      console.error("Login error:", error);
      if (
        error &&
        typeof error === "object" &&
        "data" in error &&
        typeof error.data === "object" &&
        error.data &&
        "message" in error.data
      ) {
        toast.error(
          (error.data as { message: string }).message ||
            "Something went wrong. Try again!"
        );
      } else {
        toast.error("Something went wrong. Try again!");
      }
    }
  };

  return (
    <div className='flex min-h-screen flex-col md:flex-row lg:-ml-64'>
      {/* Left Section - Image and Logo */}
      <div className='relative w-full h-screen flex flex-1 items-center justify-center bg-black/60'>
        <Image
          src='/login/bg.png'
          alt='Background'
          width={1900}
          height={1900}
          className='object-cover min-w-full min-h-full'
          priority
        />
      </div>

      {/* Right Section - Login Form */}
      <div className='flex flex-1 items-center justify-center bg-white p-6 md:p-10'>
        <div className='w-full max-w-md space-y-8'>
          <div className='space-y-2'>
            <div className='flex items-center justify-center gap-2'>
              <button
                onClick={() => router.back()}
                className='text-gray-600 hover:text-gray-900'
              >
                <ArrowLeft size={24} />
              </button>
              <h2 className='text-[32px] font-bold text-[#3D3D3A] text-center'>
                Sign In
              </h2>
            </div>
            <p className='text-lg text-[#737163] max-w-[360px] mx-auto text-center'>
              Please enter your email address to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSubmitForm)} className='space-y-6'>
            <div className='space-y-4'>
              <div className='relative'>
                <input
                  type='email'
                  {...register("email", { required: true })}
                  required
                  placeholder='Enter Email'
                  className='w-full rounded-full placeholder-[#737163] border border-gray-300 px-4 py-3 focus:border-blue-900 focus:outline-none'
                />
              </div>
              <div className='relative'>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  required
                  placeholder='Enter Password'
                  className='w-full rounded-full placeholder-[#737163] border border-gray-300 px-4 py-3 pr-12 focus:border-blue-900 focus:outline-none'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500'
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className='flex items-center justify-between cursor-pointer'>
              <label className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300'
                />
                <span className='text-lg text-[#737163]'>Remember me</span>
              </label>
              <Link
                href='/forgot-password'
                className='text-lg font-medium text-[#1A1918] hover:underline'
              >
                Forgot password?
              </Link>
            </div>

            <button
              type='submit'
              className='w-full rounded-full text-lg font-medium bg-blue-900 px-6 py-3 text-[#FFFFFF] transition-colors hover:bg-blue-800'
            >
              Sign In
            </button>

            <p className='text-center text-base text-[#3D3D3A]'>
              Don&apos;t have an account?{" "}
              <Link
                href='/signup'
                className='text-lg font-medium text-[#01336F] hover:underline'
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}