import { ArrowRight, ExternalLinkIcon } from "lucide-react";
import { space } from "postcss/lib/list";

const projects = [
    {
        id: 1,
        title:"SFA", 
        description:"System that captures and recognizes car license plates using YOLO and OCR, queries the database, and generates a PDF document with the owner's information.",
        image: "/projects/SFA.png",
        tags: ["Data Augmentation","YOLO&ObjectDetection","Computer vision","Java&SpringBoot","Flutter"],
        Github:"https://github.com/BrasileiroYan/Leitor-De-Placas"
    },
    {
        id: 2,
        title:"TaNaLista", 
        description:"App that manages all event organization and features, including Date, Guests, Place and the Main feature is allowing guests entry via QR Code and biometrics or only ID, with real-time validation and secure report generation.",
        image: "/projects/tanalista.png",
        tags: ["Java&SpringBoot","ReactNative","Computer Vision","YOLO&MediaPipe", "BiometricDetection(Face&Hand)"],
        Github:"https://github.com/DerickBessa/TaNaLista"
    },
    {
        id: 3,
        title:"BESSA", 
        description:"Command-line app that manages events and musical repertoires, stores data in SQLite, and generates PDF reports for clients",
        image: "/projects/BESSA.png",
        tags: ["SQLite", "Python"],
        Github:"https://github.com/DerickBessa/B.E.S.S.A."
    }
]

export const ProjectsSection = ( ) => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center"> Featured <span className="text-primary">Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects, Each project was carefully crafted with attention to detail, performance, and user experience
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key)=>(
                    <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col">
    
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6 flex flex-col items-center text-center flex-1">
                            <div className="flex flex-wrap gap-2 mb-3 justify-center">
                                {project.tags.map((tag, index)=>(
                                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4 break-words">
                                {project.description}
                            </p>

                            <div className="flex justify-center items-center">
                                <a href={project.Github} target="_blank" rel="noopener noreferrer">
                                    <ExternalLinkIcon className="w-5 h-5 text-primary"/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/DerickBessa" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
};