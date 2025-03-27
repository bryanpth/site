export const Ellipse = ({ size }: { size: number }) => {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-gradient-to-b from-[#031319] to-transparent opacity-40 backdrop-blur-3xl transition-all duration-500 ease-in-out"
      style={{
        width: size,
        height: size,
        boxShadow: `inset -1px -1px 1px #A6E3FC, 
                    inset -6px 4px 40px #A6DAFC94, 
                    inset 1px 1px 1px #A7F4FCBD, 
                    inset 6px 4px 40px #9DF3FF45`,
      }}
    />
  );
};

export const Ellipses = () => {
  return (
    <div className="pointer-events-none fixed inset-0 opacity-25">
      <Ellipse size={640} />
      <Ellipse size={890} />
      <Ellipse size={1140} />
      <Ellipse size={1390} />
    </div>
  );
};
