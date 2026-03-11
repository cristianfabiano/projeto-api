import "./Avatar.css";

const Avatar = ({ nome }) => {
    const primeirasLetras = nome.split(" ").map(item => item)
    return <div className="avatar_root">{nome}</div>;
};

export default Avatar;