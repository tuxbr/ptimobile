export default function Card({ data }) {
    return (
        <div className="rounded-2xl shadow-md bg-gray-50 flex" >
            <div class="">
                <div className="text-black">
                    {data.title}
                </div>
                <div className="text-black font-bold">
                    <div className="grid">
                        <img 
                            src="https://i.pinimg.com/originals/c9/1e/ee/c91eee0d4790dbf97c866b3a523a4f28.png"
                            width={10}
                        />
                        <span>
                            {data.calories}
                        </span>
                    </div>
                </div>
                <span className="text-yellow-50">
                    {data.price}
                </span>
            </div>
            <div>
                <img className="h-10"
                    src={data.imageUrl}
                    alt="Imagem"
                    width={60}
                    height={60}
                />
            </div>
        </div>
    )
}