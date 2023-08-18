import React from "react";

export const Projects = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section className="text-white" ref={ref} {...props}>
      Projects
    </section>
  );
});

Projects.displayName = "Projects";
