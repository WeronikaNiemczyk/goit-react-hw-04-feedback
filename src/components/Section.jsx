import PropTypes from 'prop-types';
import css from './App.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.text}>{title}</h2>
      <div>{children}</div>
    </>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
