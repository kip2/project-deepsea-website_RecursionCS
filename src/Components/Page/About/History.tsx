import { useNavigate } from "react-router-dom"

interface HistoryProps {
    id: number,
    age: string,
    title: string,
    text: string,
}

const History: React.FC<HistoryProps> = ({id, age, title, text }) => {
    const navigate = useNavigate()
    
    const goToDetailPage = (id: number) => {
        navigate(`/about/history/detail/${id}`)
    }

    return (
        <>
            <section className="flex justify-center mt-5">
                <div onClick={() => goToDetailPage(id)} className="flex justify-start w-210 max-lg:w-144 max-md:w-128 max-md:text-base text-2xl border-2 bg-gray-400/10  border-gray-700 rounded-md px-6 py-4 ">
                    <p className="italic my-auto max-md:text-xs text-sm text-gray-400 mr-5">{age}</p>
                    <p className="my-auto italic">{title}</p>
                </div>
            </section>
            <div className=" flex flex-col items-center w-210 max-lg:w-144 max-md:w-128 max-sm:w-100 max-md:text-base text-left">
                <p className="mt-3 leading-7">{text}</p>
            </div>
        </>
    )
}

export default History