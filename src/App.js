import { useState } from 'react';

class Link {
    static next_id = 1;
    constructor(link, name='', desc='', themes=[], isHidden=false) {
        this.Id = Link.next_id;
        Link.next_id += 1;
        this.Link = link;
        if (name === '') {name = link;}
        this.Themes = themes;
        this.Name = name;
        this.Description = desc;
        this.IsHidden = isHidden; 
    }
}
const LINKS = [
    new Link(
        "https://www.nature.com/articles/s41586-023-06903-5",
        "AlphaFold 3 Predicts Structures of Biomolecules with Unprecedented Accuracy",
        "DeepMind’s AlphaFold 3 revolutionizes structural biology by predicting protein, DNA, RNA, and ligand interactions.",
        ["AI", "biology", "DeepMind", "science"]
    ),
    new Link(
        "https://openai.com/research/gpt-4o",
        "GPT-4o: OpenAI’s New Multimodal Model",
        "Introducing GPT-4o — faster, multimodal, and more efficient model for voice, vision, and text interactions.",
        ["AI", "OpenAI", "LLM", "multimodal"]
    ),
    new Link(
        "https://huggingface.co/blog/stable-diffusion-3",
        "Stable Diffusion 3: Pushing the Boundaries of Text-to-Image Generation",
        "Stability AI releases SD3 with improved prompt understanding, typography, and image composition.",
        ["AI", "generative-art", "StableDiffusion", "computer-vision"]
    ),
    new Link(
        "https://www.nasa.gov/feature/jpl/nasas-perseverance-mars-rover-mission-fact-sheet",
        "NASA’s Perseverance Rover: Mission Fact Sheet",
        "Official NASA page detailing the goals, instruments, and discoveries of the Mars 2020 rover mission.",
        ["space", "NASA", "Mars", "robotics"]
    ),
    new Link(
        "https://www.w3.org/TR/css-flexbox-1/",
        "CSS Flexible Box Layout Module Level 1",
        "Official W3C specification for Flexbox — modern layout model for responsive web design.",
        ["web-development", "CSS", "frontend", "standards"]
    ),
    new Link(
        "https://react.dev/blog/2024/04/25/react-19",
        "React 19: What’s New",
        "Official React blog announcing React 19 with Actions, Document Metadata, and improved SSR.",
        ["React", "JavaScript", "frontend", "frameworks"]
    ),
    new Link(
        "https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health",
        "Climate Change and Health — WHO Fact Sheet",
        "How global warming affects public health, disease spread, and healthcare systems worldwide.",
        ["climate", "health", "WHO", "environment"]
    ),
    new Link(
        "https://arxiv.org/abs/2404.04655",
        "Llama 3: Meta’s Latest Open LLM",
        "Meta’s technical report on Llama 3 — performance, training, and open-weight availability.",
        ["AI", "LLM", "Meta", "open-source"]
    )
]

function ThemesList({ themes }){
  const tlist = [];
  themes.forEach((theme) => tlist.push(
    <li key={theme} className='theme'>#{theme}</li>
  ));
  return (
    <ul className='themes-list'>
      { tlist }
    </ul>
  );
}

function LinkRow({ link }) {
  return (
    <li className='link-row'>
      <a className='link-name' href={ link.Link }>{ link.Name }</a><br/>
      <a className='link-link'  href={ link.Link }>{ link.Link }</a>
      <p className='link-desc'>{ link.Description }</p>
      <ThemesList themes={link.Themes} />
    </li>
  );
}

function LinkList({ links }){
  const rows = [];

  links.forEach((link) => {
    rows.push(
      <LinkRow 
        link={link} 
        key={link.Id} />
    );
  });
  return (
    <ul>
      {rows}
    </ul>
  );
}

function SearchBar() {
  return (
    <form>
      <input className='search-input' type='text' placeholder='Search links...'/>
      
    </form>
  );
}

function FilterableLinkList({ links }) {
  return (
    <div>
      <SearchBar />
      <LinkList links={links}/>
    </div>
  );
}

export default function App() {
  return <FilterableLinkList links={LINKS} />;
}