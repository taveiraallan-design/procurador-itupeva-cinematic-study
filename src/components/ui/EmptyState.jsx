import Button from './Button';

export default function EmptyState({ title, description, action, onAction }) {
  return (
    <div className="empty-state">
      <div className="empty-orb">✦</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {action && <Button variant="secondary" onClick={onAction}>{action}</Button>}
    </div>
  );
}
