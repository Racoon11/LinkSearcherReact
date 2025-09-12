import { LinkStorage } from "./LinkStorage";

let LINKS = LinkStorage.load();
if (LINKS.size() == 0) {
    const baseLinks = [
        {
            "Link": "https://google.com",
            "Name": "Google",
            "Description": "Поисковая система",
            "Themes": ["search", "tools"]
        },
        {
            "Link": "https://github.com",
            "Name": "GitHub",
            "Description": "Хостинг кода и проектов",
            "Themes": ["code", "dev", "open-source"]
        },
        {
            "Link": "https://stackoverflow.com",
            "Name": "Stack Overflow",
            "Description": "",
            "Themes": ["q&a", "programming"]
        },
        {
            "Link": "https://youtube.com",
            "Name": "YouTube",
            "Description": "Видеохостинг",
            "Themes": ["video", "entertainment"]
        }
    ];
    baseLinks.forEach((link) => LINKS.addLink(link['Link'], link['Name'], link['Description'], link['Themes']));
}

// if ("links" in localStorage) {
//     LINKS = JSON.parse(localStorage.getItem('links')).map(Link.fromJSON) ;
// }
// else {
//     LINKS = [
//         new Link(
//             "https://www.nature.com/articles/s41586-023-06903-5",
//             "AlphaFold 3 Predicts Structures of Biomolecules with Unprecedented Accuracy",
//             "DeepMind’s AlphaFold 3 revolutionizes structural biology by predicting protein, DNA, RNA, and ligand interactions.",
//             ["AI", "biology", "DeepMind", "science"]
//         ),
//         new Link(
//             "https://openai.com/research/gpt-4o",
//             "GPT-4o: OpenAI’s New Multimodal Model",
//             "Introducing GPT-4o — faster, multimodal, and more efficient model for voice, vision, and text interactions.",
//             ["AI", "OpenAI", "LLM", "multimodal"]
//         ),
//         new Link(
//             "https://huggingface.co/blog/stable-diffusion-3",
//             "Stable Diffusion 3: Pushing the Boundaries of Text-to-Image Generation",
//             "Stability AI releases SD3 with improved prompt understanding, typography, and image composition.",
//             ["AI", "generative-art", "StableDiffusion", "computer-vision"]
//         ),
//         new Link(
//             "https://www.nasa.gov/feature/jpl/nasas-perseverance-mars-rover-mission-fact-sheet",
//             "NASA’s Perseverance Rover: Mission Fact Sheet",
//             "Official NASA page detailing the goals, instruments, and discoveries of the Mars 2020 rover mission.",
//             ["space", "NASA", "Mars", "robotics"]
//         ),
//         new Link(
//             "https://www.w3.org/TR/css-flexbox-1/",
//             "CSS Flexible Box Layout Module Level 1",
//             "Official W3C specification for Flexbox — modern layout model for responsive web design.",
//             ["web-development", "CSS", "frontend", "standards"]
//         ),
//         new Link(
//             "https://react.dev/blog/2024/04/25/react-19",
//             "React 19: What’s New",
//             "Official React blog announcing React 19 with Actions, Document Metadata, and improved SSR.",
//             ["React", "JavaScript", "frontend", "frameworks"]
//         ),
//         new Link(
//             "https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health",
//             "Climate Change and Health — WHO Fact Sheet",
//             "How global warming affects public health, disease spread, and healthcare systems worldwide.",
//             ["climate", "health", "WHO", "environment"]
//         ),
//         new Link(
//             "https://arxiv.org/abs/2404.04655",
//             "Llama 3: Meta’s Latest Open LLM",
//             "Meta’s technical report on Llama 3 — performance, training, and open-weight availability.",
//             ["AI", "LLM", "Meta", "open-source"]
//         )
//     ];

//     localStorage.setItem("links", JSON.stringify(LINKS.map(link => link.toJSON())));
// }
export {LINKS};