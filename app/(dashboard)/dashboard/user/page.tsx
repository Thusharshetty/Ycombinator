import Link from "next/link";


export  default  function  page(){
    return(
        <>
            <h1>User Page</h1>
            <Link href={"/components/dashboard/user/1"}>user1</Link>
            <Link href={"/components/dashboard/user/2"}>user2</Link>
            <Link href={"/components/dashboard/user/3"}>user3</Link>
            <Link href={"/components/dashboard/user/4"}>user4</Link>
        </>
    )
}