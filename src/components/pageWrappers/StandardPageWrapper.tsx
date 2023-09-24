interface StandardPageWrapperProps {
  children: React.ReactNode;
  title: string;
}

const StandardPageWrapper = ({ children, title }: StandardPageWrapperProps) => {
  return (
    <div className="px-8 lg:px-28 py-14 text-accent">
      <h1 className={"text-6xl text-accent pb-6 "}>{title}</h1>
      {children}
    </div>
  );
};

export default StandardPageWrapper;
