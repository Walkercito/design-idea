import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function Navbar() {
    return (
        <nav className="bg-black p-6 text-white">
            <div className="flex justify-between items-center">
                <p className="abril-fatface-regular text-2xl">Fashion Icon</p>
                <div className="flex gap-6 items-center">
                    <p className="font-semibold hover:text-orange-400 hover:underline cursor-pointer">Beneficios</p>
                    <p className="font-semibold hover:text-orange-400 hover:underline cursor-pointer">Cómo funciona</p>
                    <p className="font-semibold hover:text-orange-400 hover:underline cursor-pointer">Preguntas frecuentes</p>
                    <p className="font-semibold hover:text-orange-400 hover:underline cursor-pointer">Contacto</p>
                    
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="bg-white text-black py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Iniciar sesión
                            </button>
                        </SignInButton>
                    </SignedOut>
                    
                    <SignedIn>
                        <UserButton 
                            appearance={{
                                elements: {
                                    avatarBox: "w-8 h-8"
                                }
                            }}
                        />
                    </SignedIn>
                </div>
            </div>
        </nav>
    )
}

export default Navbar