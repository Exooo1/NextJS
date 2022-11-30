import {useRouter} from "next/router";

const Toolkit = () => {
    const rout = useRouter()
    console.log(rout)
    return <h1>Hello this is toolkit</h1>
}
export default Toolkit