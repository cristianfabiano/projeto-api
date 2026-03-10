import "./Avatar.css";

const Avatar = ({nome}) => {
    const firstLetter = nome.split('').filter(word => word).map(word =>[0])
    return <div className="avatar_root">{fir}</div>

}

export default Avatar;