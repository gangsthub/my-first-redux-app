

const Logo: (({ img }: { img: string; }) => JSX.Element) = ({img}) => (
  <div style={{
    backgroundImage: img,
    width: '50px',
    height: '50px',
    display: 'block'
  }}></div>
);

export default Logo
