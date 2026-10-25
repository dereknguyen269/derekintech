import Reveal from './Reveal.jsx';
import { skills, openSource, apps } from './data.jsx';
import { useGithubStars } from '../hooks/index.js';
import { IconStar } from './icons.jsx';
import { t, pick } from '../i18n.js';

function StarBadgeLive({ repo, url, title }) {
  const { count, loaded } = useGithubStars(repo);
  return (
    <a
      className={'star-badge' + (loaded ? ' star-loaded' : '')}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-repo={repo}
      aria-label={`Star count for ${title}`}
    >
      <IconStar />
      <span className="star-count">{count}</span>
    </a>
  );
}

export function OpenSourceCard({ project, stagger }) {
  return (
    <Reveal as="article" className="project-card" variant="reveal-scale" stagger={stagger}>
      <div className="project-top">
        <div className="project-tag-row">
          <span className="project-tag">{project.tag}</span>
          <StarBadgeLive repo={project.repo} url={project.url} title={project.title} />
        </div>
        <h3>{project.title}</h3>
        <p className="project-desc">{pick(project, 'desc')}</p>
        <div className="project-stack">
          {project.stack.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-links">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
          {t('viewOnGitHub')}
        </a>
      </div>
    </Reveal>
  );
}

export function AppCard({ project, stagger }) {
  return (
    <Reveal as="article" className="project-card" variant="reveal-scale" stagger={stagger}>
      <a
        className="project-thumb-link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.title}`}
      >
        <img className="project-thumb" src={project.thumb} alt={project.thumbAlt} width="280" loading="lazy" />
      </a>
      <div className="project-top">
        <span className="project-tag">{project.tag}</span>
        <h3>{project.title}</h3>
        <p className="project-desc">{pick(project, 'desc')}</p>
        <div className="project-stack">
          {project.stack.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-links">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
          {pick(project, 'linkLabel')}
        </a>
      </div>
    </Reveal>
  );
}

export function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <Reveal as="div" className="section-head" variant="reveal-slide-up">
          <span className="eyebrow">{t('about.eyebrow')}</span>
          <h2>{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </Reveal>
        <div className="about-grid">
          <Reveal as="div" className="about-text" variant="reveal-slide-up" stagger="stagger-1">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </Reveal>
          <Reveal as="div" className="skills-panel" variant="reveal-slide-left" stagger="stagger-2" id="skills">
            {skills.map((group) => (
              <div className="skills-group" key={group.label}>
                <span className="skills-label">{pick(group, 'label')}</span>
                <div className="tag-cloud">
                  {group.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal as="div" className="section-head" variant="reveal-slide-up">
          <span className="eyebrow">{t('projects.eyebrow')}</span>
          <h2>{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </Reveal>
        <div className="projects-grid">
          {openSource.map((project, i) => (
            <OpenSourceCard key={project.title} project={project} stagger={`stagger-${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function AppsSection() {
  return (
    <section id="apps">
      <div className="container">
        <Reveal as="div" className="section-head" variant="reveal-slide-up">
          <span className="eyebrow">{t('apps.eyebrow')}</span>
          <h2>{t('apps.title')}</h2>
          <p className="section-subtitle">{t('apps.subtitle')}</p>
        </Reveal>
        <div className="projects-grid">
          {apps.map((project, i) => (
            <AppCard key={project.title} project={project} stagger={`stagger-${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}