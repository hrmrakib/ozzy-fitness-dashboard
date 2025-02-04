import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const features = [
  "View Members Directory",
  "View Members Directory",
  "View Members Directory",
  "View Members Directory",
  "View Members Directory",
];

const plans = [
  {
    title: "3 Day Free Trial",
    price: 19,
    period: "monthly",
    features: features,
  },
  {
    title: "3 Day Free Trial",
    price: 19,
    period: "yearly",
    features: features,
  },
];

export default function SubscriptionPage() {
  return (
    <div className='bg-[#FFFFFF]'>
      {/* Back Button */}
      <div className='mb-8'>
        <button className='lg:ml-10 inline-flex items-center rounded-lg bg-navy-600 px-4 py-2 text-sm text-black bg-slate-300 transition-colors hover:bg-navy-700'>
          <ArrowLeft className='mr-2 h-4 w-4' />
          Back
        </button>
      </div>

      {/* Pricing Cards Container */}
      <div className='mx-auto grid max-w-4xl gap-6 md:grid-cols-2'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className='relative overflow-hidden rounded-2xl bg-[#F2F5F7] border-2 border-[#C3C2BF] py-8 shadow-lg transition-transform hover:scale-[1.01]'
          >
            {/* Header */}
            <div className='mb-6 text-center border-b border-[#C3C2BF] pb-3'>
              <h3 className='mb-2 text-[32px] font-bold text-[#1A1918]'>
                {plan.title}
              </h3>
              <div className='flex items-baseline justify-center'>
                <span className='text-2xl font-bold text-[#1A1918]'>$</span>
                <span className='text-4xl font-bold text-[#1A1918]'>
                  {plan.price}
                </span>
                <span className='ml-1 text-sm text-[#1A1918]'>
                  /{plan.period}
                </span>
              </div>
            </div>

            {/* Features List */}
            <div className='my-8 lg:my-12 space-y-8'>
              {plan.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className='flex items-center text-gray-600'
                >
                  <div className='mr-3 flex h-5 pl-5 items-center justify-center rounded-full bg-navy-600'>
                    {/* <div className='h-2 w-2 rounded-full bg-white'></div> */}
                    <Image
                      src={"/subscription/checkicon.png"}
                      className='w-5 h-5'
                      width={30}
                      height={30}
                      alt='check'
                    />
                  </div>
                  <span className='text-lg text-[#1A1918]'>{feature}</span>
                </div>
              ))}
            </div>

            {/* Edit Button */}
            <div className='px-5'>
              <button className='w-full rounded-lg bg-navy-600 py-3 px-5 text-center font-medium bg-[#01336F] text-white transition-colors hover:bg-navy-700'>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
