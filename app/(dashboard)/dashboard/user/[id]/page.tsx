


export  default async function  page({params}:{params:Promise<{id:string}>}){
    const {id}= await params;
    return(
        <>
            <h1 className={"text-blue-500 text-3xl"}>Hii user {id}....</h1>
        </>
    )
}