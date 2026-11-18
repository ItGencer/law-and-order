import './Label.scss';

function Labels({ label, id }) {
  return (
    <h3 className="label" id={id}>
      {label}
    </h3>
  );
}

export default Labels;