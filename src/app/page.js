import Button from "@/components/Button";
import Image from "next/image";
import {FaBeer} from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <FaBeer color="blue" size={100}/>
      <Button />
    </div>
  );
}
