// import content
import { createElement, useState } from "react";
import { content } from "../Content";
import ReactDOM from "react-dom";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkills, setSelectSkill] = useState(null);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/*modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex item-center gap-2">
          <img className="h-10" src={selectSkills?.logo} alt="" />
          <h6>{selectSkills?.name}</h6>
        </div>
        <br />

        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            {" "}
            Close
          </button>
        </div>
      </Modal>
      {/*content */}
      <div className=" md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {" "}
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              className="bg-white relative group w-full sm:cursor-pointer
              flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200
          "
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10
                group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div
                  onClick={() => {
                    setSelectSkill(skill);
                    openModal();
                  }}
                  className="text-xl absolute top-3 
              right-3"
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
