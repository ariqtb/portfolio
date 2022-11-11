import Image from "next/image";
import headerImg from "../public/headerImg.jpeg";
import charImg from "../public/logo_character.png"

export default function Page() {
  return (
    <div>
      <header>
        <div>
          <div className="mx-16 py-48">
            <p className="text-5xl font-bold mb-2">Hi, I'm Ariq</p>
            <p className="text-xl">a web developer</p>
          </div>
        </div>
      </header>

      {/* GRID */}
      <section className="my-10 mx-24 p-3 bg-slate-50 rounded-2xl">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-slate-100 via-violet-100 to-indigo-200 shadow-lg shadow-violet-200">
            <p>
              <b>3+ Project Accomplished</b>
            </p>
            <p>
              Most of them using my first language, PHP. it did well although
              many problems happened because i was learn to it
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-100 via-violet-100 to-indigo-200 shadow-lg shadow-violet-200">
            <p>
              <b>1 Year Experience</b>
            </p>
            <p className="">
              By doing some project and freelance, i was doing it about a year
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-100 via-violet-100 to-indigo-200 shadow-lg shadow-violet-200">
            <p>
              <b>Work Experience</b>
            </p>
            <p>Another experience that allow me to pour my hobby, design. </p>
          </div>
          <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-slate-100 via-violet-100 to-indigo-200 shadow-lg shadow-violet-200">
            <p>
              <b>Language Skills</b>
            </p>
            <div className="flex justify-end">
              <p>PHP, Javascript, Python, React.js/next.js(current learning)</p>
              <p>
                Bootstrap, TailwindCSS, Codeigniter, Node.js/Express(current
                learning)
              </p>
              <p>MySQL, PostgreSQL, MongoDB(current learning)</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <h4>
            I'm currently learning new language and technologies online. But
            still, i'm available to connect!
          </h4>
        </div>
      </footer>
    </div>
  );
}
