import './Team.scss';
import { team } from '../../../data/team.js';
import Labels from '../../Label/Label.jsx';

function Team() {
  return (
    <section className="team" id="team" aria-labelledby="team-title">
      <div className="team__container">
        <Labels label="Наша команда" id="team-title" />
        <div className="team__grid">
          {team.map((leader) => (
            <article className="team__card" key={leader.name}>
              <h3 className="team__area">{leader.name}</h3>
              <img
                className="team__photo"
                src={leader.photo}
                alt={`Керівник відділу: ${leader.name}`}
                loading="lazy"
              />
              <p className="team__description">{leader.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
