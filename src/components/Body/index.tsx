import rifasImg from '/public/assets/Rifas.png'
import subImages from '/public/assets/SubImages.png'
import Image from 'next/image'

export function Body() {
    return (
        <>
            <div className="max-w-[1465px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
                <main>
                    <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
                        Crie sua própria cartela de rifas personalizada e compartilhe com qualquer pessoa!
                    </h1>

                    <div className="mt-10 flex items-center gap-2">
                        <Image src={subImages} alt="Rifas" quality={100}/>
                    </div>

                    <form className="mt-10 flex gap-2">
                        <input
                            className="flex-1 px-6 py-4 rounded bg-[#202024] border border-gray-600 text-sm text-[#C4C4CC]"
                            type="text"
                            required
                            placeholder="Dê um nome para sua Rifa!"
                        />
                        <button
                            className="bg-[#F7DD43] px-6 py-4 rounded text-[#121214] font-bold text-sm hover:bg-yellow-200 transition-colors"
                            type="submit"
                        >
                            Criar Minha Rifa
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-white leading-relaxed">
                        Após criar sua rifa, você receberá um código para compartilha-lo! ✅
                    </p>
                </main>

                <Image
                    src={rifasImg}
                    alt="Rifas do site"
                    quality={100}
                />

            </div>
        </>
    )
}