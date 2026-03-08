import { ArrowRight, ExternalLinkIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    title: "SFA",
    descriptionKey: "projects.sfa.description",
    image: "/projects/SFA.png",
    tags: ["Data Augmentation","YOLO&ObjectDetection","Computer vision","Java&SpringBoot","Flutter"],
    Github: "https://github.com/BrasileiroYan/Leitor-De-Placas"
  },
  {
    id: 2,
    title: "TaNaLista",
    descriptionKey: "projects.tanalista.description",
    image: "/projects/tanalista.png",
    tags: ["Node.js","ReactNative","Computer Vision","PostgreSQL", "Typescript" ,"YOLO&MediaPipe", "BiometricDetection(Face&Hand)"],
    Github: "https://github.com/DerickBessa/TaNaLista"
  },
  {
    id: 3,
    title: "LandingPage - Gomes&Araujo",
    descriptionKey: "projects.landingPage.description",
    image: "/projects/gomesaraujo.png",
    tags: ["React.js", "Next.js" , "Tailwind CSS", "Javascript"],
    Github: "https://github.com/DerickBessa/LandingPage-GomesAraujo"
  }
];

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {t("projects.title")} <span className="text-primary">{t("projects.highlight")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col items-center text-center flex-1">
                <div className="flex flex-wrap gap-2 mb-3 justify-center">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 break-words">
                  {t(project.descriptionKey)}
                </p>

                <div className="flex justify-center items-center">
                  <a href={project.Github} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-3">
          <a
            href="https://github.com/DerickBessa"
            target="_blank"
            className="w-fit flex items-center mx-auto gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:cosmic-button transition-colors duration-300"
          >
            {t("projects.button")} <ArrowRight size={16} />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center mb-4">
                    {/* Botão para CV PT-BR */}
                    <a 
                href="https://cv-resumes.vercel.app/BR/resume-ptbr.html" 
                target="_blank" 
                className="px-6 py-2 cosmic-button hover:bg-primary/10 transition-colors duration-300"
            >
                {t("about.cv.pt")}
            </a>

                {/* Botão para CV English */}
            <a 
                href="https://cv-resumes.vercel.app/english/resume.html" 
                target="_blank" 
                className="px-6 py-2 cosmic-button hover:bg-primary/10 transition-colors duration-300"
            >
                {t("about.cv.en")}
            </a>
        </div>
      </div>
    </section>
  );
};