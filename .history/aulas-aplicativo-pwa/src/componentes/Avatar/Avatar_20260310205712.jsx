import "./Avatar.css";

const Avatar = ({ nome }) => {
    const primeiraLetra = nome.split(" ").map(item)
    return <div className="avatar_root">{nome}</div>;
};

export default Avatar;