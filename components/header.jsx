import Link from 'next/link';

const navItems = [
    { linkText: 'Servicios', href: '#servicios' },
    { linkText: 'Cobertura', href: '#cobertura' },
    { linkText: 'Clientes', href: '#clientes' },
    { linkText: 'Contacto', href: '#contacto' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-20">
            <Link href="/" className="flex items-center gap-3 p-2 -ml-2 rounded-full bg-white/5 ring-1 ring-white/10">
                <div className="flex items-center justify-center w-10 h-10 text-lg font-bold text-slate-900 rounded-full bg-gradient-to-br from-amber-400 via-amber-300 to-orange-500">
                    UC
                </div>
                <div className="flex flex-col">
                    <span className="text-sm uppercase text-white/70">Urgen Cargo</span>
                    <span className="text-sm font-semibold leading-tight text-white">Logística urgente</span>
                </div>
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-flex px-2 py-1 text-white/80 transition rounded-full hover:text-white hover:bg-white/10"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <Link
                href="#contacto"
                className="inline-flex items-center gap-2 px-4 py-2 ml-auto text-sm font-semibold text-slate-900 transition bg-white rounded-full shadow-sm hover:bg-amber-50"
            >
                Solicita una cotización
                <span aria-hidden>→</span>
            </Link>
        </nav>
    );
}
