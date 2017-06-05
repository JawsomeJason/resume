import React, { PropTypes } from 'react';

const displayName = 'Job';

const propTypes = {
  title: PropTypes.string,
  company: PropTypes.object,
  start: PropTypes.string,
  end: PropTypes.string,
  location: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

const Job = (props) => {
  const {
    title,
    company,
    start,
    end,
    location,
    children
  } = props;

  return (
    <article className="job" data-point="PD-2016.05">
      <header className="job__overview">
        <h3>{title}, <a href={company.url}>{company.title}</a></h3>
        <p>{start}–{end}</p>
        <p>{location}</p>
      </header>
      <div className="job__details">
        {children}
      </div>
    </article>
  );
};

Job.displayName = displayName;
Job.propTypes = propTypes;

export default Job;
