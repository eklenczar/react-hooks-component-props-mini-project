

const About = ({ alt, value, image, about }) => {
  return (
    <aside>
        <img src={image ? image : value} alt={alt}></img>
        <p>{about}</p>
    </aside>
  )
}

export default About