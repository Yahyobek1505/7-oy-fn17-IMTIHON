import John  from '../../public/assets/product-xx99-mark-two-headphones/desktop/BestAudio.svg'

const BestAudio = () => {
  return (
    <div className='max-w-[1110px] mx-auto'>
      <div className="flex mt-48 justify-between items-center gap-10 mb-10">
       <div className="w-[45px]">
       <h2 className="md:text-h2 lg:max-w-[50px] text-pureBlack uppercase">Bringing you the <span className="text-[#d87d4a]"> <br /> best</span> audio gear</h2>
        <p className="pt-8 opacity-[50%] md:max-w-[572px]" >Located at the heart of New York City, 
        Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
       </div>
       <div className="img-john ">
        <img src={John} alt="" />
       </div>
      </div>
    </div>
  )
}

export default BestAudio
