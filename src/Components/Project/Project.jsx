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
            {[...projects].reverse().map((project, index) =>
              project &&
              project.fields &&
              project.fields.projectTitle ? (
                <div
                  key={index}
                  className="bg-[--component-color] p-1 rounded-2xl border border-[#d1d1d1]"
                >
                  <div
                    className="lg:h-[250px] md:h-45 h-35 sm:h-40 border-[#121212] border-b-2 cursor-pointer relative overflow-hidden rounded-t-xl"
                    onClick={() => openModal(project)}
                  >
                    <img
                      src={project.fields.projectImage.fields.file.url}
                      className="h-[100%] w-[100%]  object-fill object-center hover:transform hover:scale-[1.07] transition-all duration-[0.5s]"
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
        className="modal w-[90%] h-[70%] md:w-[70%] lg:w-[50%] rounded-xl md:rounded-none"
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

