import { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-black text-white">
            <div className="p-6">
                <div className="flex justify-between items-center">
                    <p className="abril-fatface-regular text-2xl">Fashion Icon</p>
                    
                    <div className="hidden md:flex gap-6 items-center">
                        <p className="font-semibold hover:text-orange-400 hover:underline cursor-pointer transition-colors">
                            Beneficios
                        </p>
                        <p className="font-semibold hover:text-orange-400 hover:underline cursor-pointer transition-colors">
                            Cómo funciona
                        </p>
                        <p className="font-semibold hover:text-orange-400 hover:underline cursor-pointer transition-colors">
                            Preguntas frecuentes
                        </p>
                        <p className="font-semibold hover:text-orange-400 hover:underline cursor-pointer transition-colors">
                            Contacto
                        </p>
                        
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

                    <button 
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col gap-1 p-2 hover:bg-gray-800 rounded transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                            isMenuOpen ? 'rotate-45 translate-y-2' : ''
                        }`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                            isMenuOpen ? 'opacity-0' : ''
                        }`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}></div>
                    </button>
                </div>
            </div>

            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="bg-black px-6 pb-6">   
                    <div className="flex flex-col items-center space-y-6 text-center">
                        <p className="text-white text-lg font-medium hover:text-orange-400 cursor-pointer transition-colors">
                            Beneficios
                        </p>
                        <p className="text-white text-lg font-medium hover:text-orange-400 cursor-pointer transition-colors">
                            Cómo funciona
                        </p>
                        <p className="text-white text-lg font-medium hover:text-orange-400 cursor-pointer transition-colors">
                            Preguntas frecuentes
                        </p>
                        <p className="text-white text-lg font-medium hover:text-orange-400 cursor-pointer transition-colors">
                            Contacto
                        </p>
                        
                        <div className="pt-4 w-full max-w-sm">
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <button className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        Iniciar sesión
                                    </button>
                                </SignInButton>
                            </SignedOut>
                            
                            <SignedIn>
                                <div className="flex justify-center items-center gap-3 py-3">
                                    <UserButton 
                                        appearance={{
                                            elements: {
                                                avatarBox: "w-8 h-8"
                                            }
                                        }}
                                    />
                                    <span className="text-white font-semibold">Mi cuenta</span>
                                </div>
                            </SignedIn>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;