export const Tabs = ({ activeTabContent }) => {
  return (
    <div className="block" data-cy={activeTabContent}>
      {activeTabContent}
    </div>
  );
};
