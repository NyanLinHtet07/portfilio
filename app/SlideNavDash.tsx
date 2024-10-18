"use client";

export default function SlideNavDash(){
    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-4 fixed">
          <h1 className="text-2xl font-bold mb-8">Dashboard Menu</h1>
          <ul className="space-y-4">
            <li>
              <a href="#about" className="hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#education" className="hover:underline">
                Education
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:underline">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#recommendations" className="hover:underline">
                Recommendations
              </a>
            </li>
          </ul>
        </div>
    )
}