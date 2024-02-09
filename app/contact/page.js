

export default function Contact() {
  return (
    <div className="bg-teal-700 py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100">Get in touch</h2>
              <p className="mt-4 leading-7 text-zinc-200">
                Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Collaborate</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold text-teal-600" href="mailto:collaborate@example.com">
                        collaborate@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-2345</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Press</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold  text-teal-600" href="mailto:press@example.com">
                        press@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-3456</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Join our team</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold  text-teal-600" href="mailto:careers@example.com">
                        careers@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-4567</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Say hello</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold  text-teal-600" href="mailto:hello@example.com">
                        hello@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-5678</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100">Locations</h2>
              <p className="mt-4 leading-7 text-zinc-200">
                Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Los Angeles</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>4556 Brendan Ferry</p>
                  <p>Los Angeles, CA 90210</p>
                </address>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">New York</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>886 Walter Street</p>
                  <p>New York, NY 12345</p>
                </address>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  )



// export default function ContactMe() {
//   return (
//     <>
//       <div className="flex justify-center items-center bg-gradient-to-b from-teal-100 to-white">
//         <div className="text-center mt-40">
//           <span className="font-xs font-bold">#ContactMe</span>
//           <h2 className="mt-4 mb-2 font-bold text-3xl">Contact Me</h2>
//           <p className="max-w-xs text-sm">
//             Get in touch with me for any inquiries or collaborations.
//           </p>
//         </div>
//       </div>

//       <div className="flex justify-center items-center mt-12">
//         <div className="w-full max-w-4xl px-4">
//           <div className="grid grid-cols-3 gap-8">
//             <div className="text-left">
         
//               <p className="font-bold text-xs text-black whitespace-nowrap mt-4">Location</p>
//               <p className="font-bold text-sm text-black whitespace-nowrap mt-2">123 Main Street, City, Country</p>
//             </div>

//             <div className="text-left">
           
//               <p className="font-bold text-xs text-black whitespace-nowrap mt-4">Email</p>
//               <p className="font-bold text-sm text-black whitespace-nowrap mt-2">contact@example.com</p>
//             </div>

//             <div className="text-left">
            
//               <p className="font-bold text-xs text-black whitespace-nowrap mt-4">Phone</p>
//               <p className="font-bold text-sm text-black whitespace-nowrap mt-2">+123 456 7890</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center items-center mt-10 mb-24">
//         <button className="border text-md border-black uppercase text-sm m-4 p-3">
//           Send Message
//         </button>
//       </div>
//     </>
//   );
}