function ListName({data}){
    // IF ELSE
    // if(!data){
    //     return (
    //         <p>Tidak Ada Data</p>
    //     )
    // }else{
    //     return(
    //         <ul>
    //             {data.map(item => (
    //                 <li>{item.firstName}</li>
    //             ))}
    //         </ul>
    //     )
    // }
    
    // TERNARY
    return !data ? <p>Tidak Ada Data</p>: <p>Ada Data</p>
}

export default ListName;