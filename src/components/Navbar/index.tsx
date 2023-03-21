import Logo from "../Logo"

export function Navbar() {
    return (
        <>
            <div className="w-full py-5 flex items-center justify-around">
                <a href="">
                    <Logo />
                </a>

                <ul className="flex">
                    <li className="p-4">
                        <a className="font-extrabold text-[#FAFAFAFA]" href="">Quem Somos</a>
                    </li>

                    <li className="p-4">
                        <a className="font-extrabold text-[#FAFAFAFA]" href="">Tipo de Rifas</a>
                    </li>
                </ul>

                <ul className="flex">
                    <li className="p-4">
                        <a className="font-extrabold text-[#FAFAFAFA]" href="">
                            Criar Conta
                        </a>
                    </li>

                    <li className="p-4">
                        <a href="" className="px-10 py-3 text-base bg-[#F7DD43] text-[#121214] rounded-[12px] font-extrabold gap-2 justify-center shadow-lg hover:bg-yellow-200 transition-colors">
                            Entrar
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}