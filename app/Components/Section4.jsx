import Image from 'next/image'
import profilePic from '../../public/Section 4.png'

export default function Page() {
  return (
    <div className="w-full">
      <Image
        src={profilePic}
        alt="Picture of the author"
        layout="responsive"
        width={1920} // Replace with the desired width
        height={1080} // Replace with the desired height
        className="w-full h-auto"
      />
    </div>
  )
}