// import React from "react";
// import { useSelector } from "react-redux";
// import SectionTitle from "../../components/SectionTitle";

// function Projects() {
//   const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
//   const { portfolioData } = useSelector((state) => state.root);
//   const { projects } = portfolioData;

//   return (
//     <div>
//       <SectionTitle title="Projects" />
//       <div className="flex py-10 gap-20 sm:flex-col">
//         <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
//           {projects.map((project, index) => (
//             <div
//               onClick={() => {
//                 setSelectedItemIndex(index);
//               }}
//               className="cursor-pointer"
//             >
//               <h1
//                 className={`text-xl px-5
//                  ${
//                    selectedItemIndex === index
//                      ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
//                      : "text-white"
//                  } `}
//               >
//                 {project.title}
//               </h1>
//             </div>
//           ))}
//         </div>

//         <div className="flex items-center justify-center gap-10 sm:flex-col">
//           <img
//             src={projects[selectedItemIndex].image}
//             alt=""
//             className="h-60 w-72"
//           />
//           <div className="flex flex-col gap-5">
//             <h1 className="text-secondary text-xl">
//               {projects[selectedItemIndex].title}
//             </h1>
//             <p className="text-white">
//               {projects[selectedItemIndex].description}
//             </p>
//             <p className="text-white">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
//               expedita accusantium nulla ad odio quisquam consequuntur
//               laudantium saepe ratione consectetur optio necessitatibus ut,
//               impedit ducimus corrupti ullam veniam error non.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects;

// version-1

import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Projects() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [selectedSubProjectIndex, setSelectedSubProjectIndex] =
    React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData; // 'projects' now represents categories

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        {/* Left Column: Category List */}
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              onClick={() => {
                setSelectedCategoryIndex(categoryIndex);
                setSelectedSubProjectIndex(0); // Reset subproject when switching category
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                 ${
                   selectedCategoryIndex === categoryIndex
                     ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                     : "text-white"
                 } `}
              >
                {category.title}{" "}
                {/* Changed from category.categoryTitle to category.title */}
              </h1>
            </div>
          ))}
        </div>

        {/* Right Column: Subprojects and Details */}
        <div className="flex flex-col gap-10 sm:flex-col w-2/3">
          <div className="flex flex-col gap-5">
            {/* Subproject List */}
            <h2 className="text-secondary text-lg">
              {projects[selectedCategoryIndex].title}{" "}
              {/* Changed from categoryTitle to title */}
            </h2>
            <div className="flex flex-wrap gap-5">
              {projects[selectedCategoryIndex].subProjects.map(
                (subProject, subProjectIndex) => (
                  <div
                    key={subProjectIndex}
                    onClick={() => setSelectedSubProjectIndex(subProjectIndex)}
                    className={`cursor-pointer border px-4 py-2 ${
                      selectedSubProjectIndex === subProjectIndex
                        ? "border-tertiary bg-[#1a7f5a31]"
                        : "border-gray-500"
                    }`}
                  >
                    <h3
                      className={`text-base ${
                        selectedSubProjectIndex === subProjectIndex
                          ? "text-tertiary"
                          : "text-white"
                      }`}
                    >
                      {subProject.title}
                    </h3>
                    <button
                      onClick={() => window.open(subProject.link, "_blank")}
                      className="text-sm text-white bg-tertiary px-2 py-1 mt-2"
                    >
                      Preview
                    </button>
                  </div>
                )
              )}
            </div>

            {/* Subproject Details */}
            <div className="flex items-center justify-center gap-10 sm:flex-col">
              <img
                src={
                  projects[selectedCategoryIndex].subProjects[
                    selectedSubProjectIndex
                  ].image
                }
                alt=""
                className="h-60 w-72"
              />
              <div className="flex flex-col gap-5">
                <h1 className="text-secondary text-xl">
                  {
                    projects[selectedCategoryIndex].subProjects[
                      selectedSubProjectIndex
                    ].title
                  }
                </h1>
                <p className="text-white">
                  {
                    projects[selectedCategoryIndex].subProjects[
                      selectedSubProjectIndex
                    ].description
                  }
                </p>
                <p className="text-white">
                  Technologies:{" "}
                  {projects[selectedCategoryIndex].subProjects[
                    selectedSubProjectIndex
                  ].technologies.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
