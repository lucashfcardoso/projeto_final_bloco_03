import { ShoppingCart, User } from "@phosphor-icons/react"

function Navbar () {
    return (

        <>
        
        <div className="w-full bg-indigo-900 text-white flex justify-center py-4">

            <div className="container flex justify-between text-lg">

                <div className="text-2xl font-bold uppercase">Farmácia Saúde e Bem Estar</div>

                <div className="flex gap-4">
                    <div className="hover:underline">Categorias</div>
                    <div className="hover:underline">Cadastrar categoria</div>
                    <div className="hover:underline"><User size={32} /></div>
                    <div className="hover:underline"><ShoppingCart size={32} /></div>
                </div>
                
            </div>

        </div>

        </>

    )
}
export default Navbar