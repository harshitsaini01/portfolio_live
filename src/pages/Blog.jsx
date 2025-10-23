import { ShootingStars } from "../components/ui/shooting-stars";

export default function Blog() {
  return (
    <section className="bg-gradient-to-b from-blue-200 via-blue-50 to-white flex flex-col pt-[110px] pb-[200px] text-center px-4">
         <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
 <ShootingStars />
</div>
      <h1 className="text-2xl md:text-[50px]  font-bold text-gray-900 flex items-center justify-center gap-3">
      Thoughts, Tips & Code Snippets <span></span>
      </h1>
      <p className="mt-4 text-2xl md:text-xxl font-bold text-gray-600">
       Insights, tutorials & personal dev notes.
      </p>
    </section>
  );
}
