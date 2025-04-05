export default function Pagination(){
    
    const ({totalPage, currentPage, onPageChange})=>{
        const handleClick = (pageNumber) =>{
            onPageChange(pageNumber);
        };
    }

    
    return(
        <div>
            {Array.from ({length: totalPage}, (item, index)=>(
                <button key={index +1}
                className={`w-12 h-12 rounded-full transition-all ${currentPage === index + 1 ? 
                "bg-primary text-white": 
                "bg-gray-300 hover:bg-black hover:text-white text-gray-800"}`}
                onClick={()=> handleClick(index + 1)}>
                    {index + 1}
                </button>
            ))}
        </div>
    )
}