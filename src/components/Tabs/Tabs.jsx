export const Tabs = ({ tabContent }) => {
  return (
    <div className="block" data-cy={tabContent}>
      {tabContent}
    </div>
  );
};
