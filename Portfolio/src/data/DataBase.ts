import { Tech, Programs, SocialLinks, ProyectsData} from "./props";

export const Technologies : Array<Tech> = [

    {
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        name: "JavaScript",
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
        name: "python",
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
        name: "C++",
    },
    {
        img:"https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
        name: "C#",
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
        name: "TypeScript",
    },
    {
        img:"https://e7.pngegg.com/pngimages/837/18/png-clipart-logo-java-runtime-environment-programming-language-runtime-system-oracle-text-logo-thumbnail.png",
        name: "Java",
    },
]

export const Programas : Array<Programs> =[
    {
        img: "https://assets.stickpng.com/images/62e131df7fe3599fdd46ecb3.png",
        name: "Unity",
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        name:"React",
    },
    {
        img:"https://cdn.icon-icons.com/icons2/3913/PNG/512/mysql_logo_icon_248406.png",
        name:"MySQL",
    },
    {
        img:"https://files.raycast.com/sjxs3pxsc6k63ju0fzv8l3cu4v90",
        name:"Tailwind",
    },

]

export const Socials : Array<SocialLinks> = [
    {
        img:"https://cdn-icons-png.flaticon.com/512/25/25231.png",
        name:"Github",
        link:"https://github.com/ningunFernando"
    },
    {
        img:"https://cdn-icons-png.flaticon.com/512/61/61109.png",
        name:"LinkedIn",
        link:"https://www.linkedin.com/in/fernando-fabian-pati%C3%B1o-ibarra-281431289/"
    },
    {
        img:"https://static.itch.io/images/itchio-textless-black.svg",
        name:"Itch.io",
        link:"https://ningunfernando.itch.io/"
    },
]

export const Proyects :Array<ProyectsData> = [
    {
        img: "../../public/engrane.png",
        name: "Renta de maquinaria engrane",
        info: "Pagina de catalogo hecha para una empresa de rernta de maquinaria para obra",
        link: "http://engrane-renta-de-maquinaria.com/#motto"
    },
    {
        img: "../../public/kuchen.png",
        name: "Kuchen Construcciones",
        info: "Pagina de portafolio para una construcctora enfocada en desarrollo residencial en Puerto vallarta",
        link: "http://www.kuchenconstrucciones.com/#services"
    },
    {
        img: "../../public/ganas.png",
        name: "Ganas bienes y raices",
        info: "Pagina de portafolio para una inmobiliaria ubicada en bahia de banderas",
        link: "https://ganasbienesraices.com/"
    },
]