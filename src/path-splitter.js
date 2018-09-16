const splitPaths = (paths, size) => paths.map((path, i) => {
  return (i % size === 0) ? paths.slice(i, i + size) : null;
}).filter(e => e);

export default splitPaths;
