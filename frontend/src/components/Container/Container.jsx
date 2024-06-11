const Container = ({ children }) => {
  return (
    <div className="container rounded-2xl mx-auto mt-20 bg-[#eeeeee] p-5">
      {children}
    </div>
  );
};

export default Container;
