type SectionHeaderProps = {
  label: string;
  subtitle?: string;
};

export function SectionHeader({ label, subtitle }: SectionHeaderProps) {
  return (
    <div className="section-header reveal">
      <span aria-hidden="true">{"//"}</span>
      <p>{label}</p>
      <span aria-hidden="true">{"//"}</span>
      {subtitle ? <strong>{subtitle}</strong> : null}
    </div>
  );
}
