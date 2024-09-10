import Link from "next/link"
import courseData from "../data/dataFile.json"


const FeatureCources = () => {

        // init  value on type Script //
    interface Course{
        "id": Number,
        "title": String,
        "slug":String,
        "description": String,
        "price": Number,
        "instructor": String,
        "isFeatured": Boolean,
    }

    function FeaturedData (){
      const AllData = courseData.courses.filter((courses:Course) => courses.isFeatured)        
    }


  return (
    <div className="bg-slate-800 py-12">
        <div className="text-center ">
            <h2 className="uppercase text-teal-600 font-bold text-xl "> Featurrd Courses </h2>
        <p className="text-neutral-200 font-bold mt-2 text-4xl">Learn With Our us </p>
            </div>
        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            
            </div>
        </div>
        <div className="text-center mt-20 "> 
          <Link href="/Music"
          className="bg-neutral-300 px-4 py-2 rounded-xl  border text-neutral-800 hover:bg-neutral-400 transition duration-200 ">
         view All music
          </Link>
        
        </div>

    </div>
  )
}

export default FeatureCources