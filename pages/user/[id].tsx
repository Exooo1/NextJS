import {useRouter} from "next/router";

const User = () => {
    const {query} = useRouter()
    console.log(query)
    const sum = 15
    return <>
        <h1>this User {sum}</h1>
    </>

}

export default User