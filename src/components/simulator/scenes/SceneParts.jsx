export function PublicBuilding({ label = 'Prefeitura' }) {
  return (
    <div className="scene-building cinematic-building">
      <div className="building-sky-glow" />
      <div className="building-roof" />
      <div className="building-emblem">⚖</div>
      <div className="building-columns"><i /><i /><i /><i /></div>
      <div className="building-steps"><i /><i /></div>
      <strong>{label}</strong>
    </div>
  );
}

export function Person({ role = 'authority', label }) {
  return (
    <div className={`scene-person person-${role}`}>
      <div className="person-shadow" />
      <div className="person-head"><span className="person-hair" /></div>
      <div className="person-torso"><span className="person-tie" /></div>
      <div className="person-arm arm-left" />
      <div className="person-arm arm-right" />
      <small>{label}</small>
    </div>
  );
}

export function Document({ status = 'normal', label = 'ATO' }) {
  return (
    <div className={`scene-document document-${status}`}>
      <div className="document-fold" />
      <div className="document-lines" />
      <div className="document-signature" />
      <strong>{label}</strong>
    </div>
  );
}

export function Stamp({ label = 'CARIMBO', tone = 'orange' }) {
  return (
    <div className={`scene-stamp stamp-${tone}`}>
      <span className="stamp-handle" />
      <strong>{label}</strong>
    </div>
  );
}

export function Desk() {
  return <div className="scene-desk"><span /><i className="desk-leg left" /><i className="desk-leg right" /></div>;
}

export function LegalScanner({ tone = 'cyan', label = 'SCANNER' }) {
  return (
    <div className={`legal-scanner scanner-${tone}`}>
      <div className="scanner-beam" />
      <div className="scanner-core" />
      <strong>{label}</strong>
    </div>
  );
}

export function BadgeSeal({ children, tone = 'green' }) {
  return <div className={`scene-seal seal-${tone}`}><span>{children}</span></div>;
}

export function SceneCaption({ children }) {
  return <div className="scene-caption">{children}</div>;
}
