import "./Avatar.css";

const Avatar = ({ nome }) => {
    const primeirasLetras = nome.split(" ")
    return <div className="avatar_root">{nome}</div>;
};

export default Avatar;