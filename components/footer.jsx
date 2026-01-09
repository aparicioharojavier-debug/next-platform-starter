import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-20 sm:pb-16">
            <div className="grid gap-6 text-sm text-white/70 sm:grid-cols-3">
                <div className="space-y-2">
                    <p className="text-base font-semibold text-white">Urgen Cargo</p>
                    <p>Logística express, última milla y soluciones de paquetería para empresas que necesitan velocidad.</p>
                </div>
                <div className="space-y-2">
                    <p className="text-base font-semibold text-white">Contacto</p>
                    <p>
                        <Link href="mailto:hola@urgencargo.com" className="underline-offset-4 hover:text-white">
                            hola@urgencargo.com
                        </Link>
                    </p>
                    <p>
                        <Link href="tel:+34999999999" className="underline-offset-4 hover:text-white">
                            +34 999 999 999
                        </Link>
                    </p>
                </div>
                <div className="space-y-2">
                    <p className="text-base font-semibold text-white">Operamos</p>
                    <p className="leading-relaxed">Centros logísticos en Madrid, CDMX y Bogotá. Red de aliados en 40+ ciudades.</p>
                </div>
            </div>
            <p className="mt-8 text-xs text-white/50">Inspirado en la experiencia de Urgen Cargo.</p>
        </footer>
    );
}
