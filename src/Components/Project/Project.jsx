// import React, { useState } from "react";
// import img from "../../Images/bgres.jpg";
// import Modal from "react-modal";
// import ProjectData from "../../Data/data";
// import { MdClose } from "react-icons/md";

// function Project() {
//   const [isOpen, setIsOpen] = useState();
//   const [ProjectsDetails, SetProjectDetails] = useState(null);

//   const openModal = (details) => {
//     SetProjectDetails(details);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     SetProjectDetails(false);
//   };

//   return (
//     <>
//       <section className="md:px-20 sm:px-5 sm:pb-20" data-aos="fade">
//         <div className="bg-[--bg-color] lg:rounded-xl w-full md:rounded-none lg:px-10 px-3 sm:px-3 md:px-4 pb-10">
//           <h2 className="text-[--main-color] text-center md:text-left py-5 text-2xl  lg:text-4xl after-effect after:left-40">
//             Projects
//           </h2>
//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3">
//             {ProjectData.map((project) => (
//               <div
//                 key={project.id}
//                 className="p-4 bg-[--component-color] rounded-2xl"
//                 onClick={() => openModal(project)}
//               >
//                 <div className="lg:h-[250px] md:h-45 h-35 sm:h-40">
//                   <img
//                     src={project.img}
//                     className="h-[100%] w-[100%] rounded-t-xl object-fill object-center"
//                     alt={project.name}
//                   />
//                 </div>
//                 <div className="bg-[--bg-color] text-center p-2 rounded-b-xl">
//                   <h3 className="text-[--main-color]">{project.name}</h3>
//                   <p>{project.detail}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <Modal
//           isOpen={isOpen}
//           onRequestClose={() => setIsOpen(false)}
//           className="outline-none flex items-center rounded-2xl"
//         >
//           <div className="w-[300px] md:w-80 flex items-center   lg:w-[550px] bg-[--bg-color] rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg my-10">
//             <button
//               onClick={closeModal}
//               className=" text-2xl text-[--main-color] focus:outline-none text-right absolute top-4 right-4 cursor-pointer"
//             >
//               <MdClose />
//             </button>
//             {ProjectsDetails && (
//     Array.isArray(ProjectsDetails.description) ? (
//         <div>
//             <h2 className="text-[--main-color]">{ProjectsDetails.name}</h2>
//             <a href={ProjectsDetails.website} target="_blank" className="text-[12px]">{ProjectsDetails.website}</a>
//             <p>{ProjectsDetails.detail}</p>
//             <img src={ProjectsDetails.image} alt={ProjectsDetails.name} />
//             {ProjectsDetails.description.map((paragraph, index) => (
//                 <p key={index}>{paragraph}</p>
//             ))}
//         </div>
//     ) : (
//         <div>
//             <h2 className="text-[--main-color]">{ProjectsDetails.name}</h2>
//             <a href={ProjectsDetails.website} target="_blank" className="text-[12px]">{ProjectsDetails.website}</a>
//             <p className="text-[12px]">{ProjectsDetails.detail}</p>
//             <div className="lg:h-[320px] md:h-72 sm:h-40 h-[200px] md:p-[30px] p-3">
//             <img src={ProjectsDetails.img} alt={ProjectsDetails.name} className="h-[100%] border border-[--main-color] w-[100%] object-cover object-center object-fill" />
//             </div>
//             <p className="text-[12px]">{ProjectsDetails.description}</p>
//         </div>
//     )
// )}
//           </div>
//         </Modal>
//       </section>
//     </>
//   );
// }
// export default Project;
// import React, { useState,useEffect } from "react";
// import Modal from "react-modal";
// import { MdClose } from "react-icons/md";
// import { createClient } from "contentful";
// // createClient


// function Project() {
//   // const [isOpen, setIsOpen] = useState();
//   const [Projects,setProjects] = useState([]);

//   const client = createClient({
//     space: "12qkvm4jqb2e",
//     accessToken: "bkfKnjMpEyV2aY_nK1jWfixb1CRqJiHBrFThTr0G7cM",
//   });


//   useEffect(() => {
//     const getallProjects = async () => {
//       try {
//         const Project = await client.getEntries();
//         setProjects(Project.items);
//       } catch (error) {
//         console.log(`Error fetching Projects ${error}`);
//       }
//     };
//     getallProjects();
//   }, [client]);

//   return (
//     <>
//       <section className="md:px-20 sm:px-5 sm:pb-20" data-aos="fade">
//         <div className="bg-[--bg-color] lg:rounded-xl w-full md:rounded-none lg:px-10 px-3 sm:px-3 md:px-4 pb-10">
//           <h2 className="text-[--main-color] text-center md:text-left py-5 text-2xl  lg:text-4xl after-effect after:left-40">
//             Projects
//           </h2>
//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3">
//           {Projects.map(
//             (Project, index) =>
//               Project &&
//             Project.fields &&
//             Project.fields.projectTitle && (
//               <div
//                 key={index}
//                 className="bg-[--component-color] p-1 rounded-2xl border border-[#d1d1d1]"
//               >
//                 <div className="lg:h-[250px] md:h-45 h-35 sm:h-40 border-[#121212] border-b-2 cursor-pointer">
//                   <img
//                     src={Project.fields.projectImage.fields.file.url}
//                     className="h-[100%] w-[100%] rounded-t-xl object-fill object-center hover:transform hover:scale-150"
//                     alt=""
//                   />
//                 </div>
//                 <div className="bg-[--main-color] text-center p-2 rounded-b-xl text-[--bg-color] border-[--bg-color] border-t-4">
//                   <h3>{Project.fields.projectTitle}</h3>
//                   <p>{Project.fields.projectDetail}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//     </section>
//     </>
//   );
// }
// export default Project;

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { createClient } from "contentful";

Modal.setAppElement('#root'); // Set the root element for accessibility

function Project() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  const client = createClient({
    space: "12qkvm4jqb2e",
    accessToken: "bkfKnjMpEyV2aY_nK1jWfixb1CRqJiHBrFThTr0G7cM",
  });

  useEffect(() => {
    const getAllProjects = async () => {
      try {
        const response = await client.getEntries();
        setProjects(response.items);
      } catch (error) {
        console.log(`Error fetching projects: ${error}`);
      }
    };
    getAllProjects();
  }, [client]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className="md:px-20 sm:px-5 sm:pb-20" data-aos="fade">
        <div className="bg-[--bg-color] lg:rounded-xl w-full md:rounded-none lg:px-10 px-3 sm:px-3 md:px-4 pb-10">
          <h2 className="text-[--main-color] text-center md:text-left py-5 text-2xl lg:text-4xl after-effect after:left-40">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) =>
              project &&
              project.fields &&
              project.fields.projectTitle ? (
                <div
                  key={index}
                  className="bg-[--component-color] p-1 rounded-2xl border border-[#d1d1d1]"
                >
                  <div
                    className="lg:h-[250px] md:h-45 h-35 sm:h-40 border-[#121212] border-b-2 cursor-pointer"
                    onClick={() => openModal(project)}
                  >
                    <img
                      src={project.fields.projectImage.fields.file.url}
                      className="h-[100%] w-[100%] rounded-t-xl object-fill object-center"
                      alt={project.fields.projectTitle}
                    />
                  </div>
                  <div className="bg-[--main-color] text-center p-2 rounded-b-xl text-[--bg-color] border-[--bg-color] border-t-4 h-16">
                    <h3>{project.fields.projectTitle}</h3>
                    <p>{project.fields.projectDetail}</p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal w-[90%] h-[90%] md:w-[70%] lg:w-[50%] rounded-xl md:rounded-none"
        overlayClassName="overlay"
      >
          <div className="sticky top-0 flex justify-between items-center bg-white p-3 border-b-4 border-[#121212] z-10">
            <h2 className="text-2xl">{selectedProject?.fields?.projectTitle}</h2>
            <button onClick={closeModal} className="text-2xl">
              <MdClose />
            </button>
          </div>
        {selectedProject && (
          <>
          <div className="py-5 px-5">
           <a href={selectedProject.fields.projectLink} target="_blank">{selectedProject.fields.projectLink}</a>
            <img
              src={selectedProject.fields.projectImage.fields.file.url}
              className="w-full rounded-xl my-4"
              alt={selectedProject.fields.projectTitle}
            />
            <p className="my-4 text-center">{selectedProject.fields.projectDetail}</p>
            <p className="text-[12px] lg:text-sm md:">{selectedProject.fields.projectDescription}</p>
          </div>
          </>
        )}
      </Modal>
    </>
  );
}

export default Project;

