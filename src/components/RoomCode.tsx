import copyImg from "../assets/images/copy.svg";
import "../styles/roomCode.scss";

interface RoomCodeProps {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  const copyRoomCode = () => {
    navigator.clipboard.writeText(props.code);
  };

  return (
    <button className="room-code" onClick={copyRoomCode}>
      <div>
        <img src={copyImg} alt="Copiar" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}

//parei no 01:01:29 da video aula 3
