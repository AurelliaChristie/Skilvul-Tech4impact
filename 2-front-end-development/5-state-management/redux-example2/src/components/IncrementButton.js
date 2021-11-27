import { useDispatch } from "react-redux";
import { increment } from "../actions";

export default function IncrementButton(){

    const dispatch = useDispatch()
    const addCounter = () => {
        useDispatch(increment())
    }

    return (
        <button onClick={addCounter}>
            Tambah
        </button>
    )
}