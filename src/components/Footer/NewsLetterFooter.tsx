export default function NewsletterSection() {
    return (
<div className="w-[1169px] mx-auto text-center mb-12 flex gap-[271px]">
<div className="flex flex-col">
<h2 className="text-3xl font-bold mb-4">
          <span className="text-[#FF9F0D]">Still</span> You Need Our Support ?
        </h2>
        <p className="mb-6">Dont wait make a smart & logical quote here. Its pretty easy.</p>
</div>

        <form className="w-[459px] h-[55.86px] flex max-w-2xl mx-auto">
          <input 
            type="email"
            placeholder="Enter Your Email"
            className="flex-grow bg-[#FF9F0D] text-white placeholder-white placeholder-opacity-60 px-4 py-2 rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-[#FF9F0D] px-6 py-2 rounded-r-md font-semibold hover:bg-[#FF9F0D] hover:text-white transition duration-300"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    )
  }
  
  