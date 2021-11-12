const ProgressBar = ({ bar, handleStep }) => {
  return (
    <div className="stepper-wrapper">
      <div
        className={`stepper-item ${bar === 1 ? "active" : ""} completed`}
        onClick={() => handleStep(1)}
      >
        <div className="step-counter">1</div>
        <div className="step-name">Informacje dotyczące towaru</div>
      </div>
      <div
        className={`stepper-item ${bar === 2 ? "active" : ""} ${
          bar > 1 ? "completed" : ""
        }`}
        onClick={() => handleStep(2)}
      >
        <div className="step-counter">2</div>
        <div className="step-name">Informacje dotyczące reklamodawcy</div>
      </div>
      <div
        className={`stepper-item ${bar === 3 ? "active" : ""} ${
          bar > 2 ? "completed" : ""
        }`}
        onClick={() => handleStep(3)}
      >
        <div className="step-counter">3</div>
        <div className="step-name">Podsumowanie</div>
      </div>
    </div>
  );
};

export default ProgressBar;
